<template>
  <div class='filters_container'>
    <div class='filters_container_search'>
      <Search @updateValue='handleSetInputValue'/>
    </div>
    <div class='filters_container_item'>
      <div class='w-full'>
        <label>
          Product category
        </label>
        <VSelect
          class='mt-[20px]'
          :items='categoriesList'
          v-model='category'
          item-title='label'
          item-value='value'
          clearable
          hide-details
          single-line
          density='compact'
        ></VSelect>
      </div>
    </div>
    <div class='filters_container_item'>
      <div class='w-full'>
        <label>
          Sale
        </label>
        <VSelect
          class='mt-[20px]'
          v-model='saleType'
          :items='saleTypesList'
          item-title='label'
          item-value='value'
          clearable
          hide-details
          single-line
          density='compact'
        ></VSelect>
      </div>
    </div>
    <div class='filters_container_item'>
      <div class='w-full'>
        <VBtn
          class='mt-[42px] w-full bg-black rounded-none'
          style='{
            height: 40px;
            border-radius: 0;
            box-shadow: none;
          }'
          @click='getProductsByQuery'
        >
          Apply
        </VBtn>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { VBtn, VSelect } from 'vuetify/components'
import Search from '../../components/Search.vue'
import { defineEmits, Ref, ref } from 'vue'
import { ProductsQuery } from '../../services/types/productsQuery'
import { ProductCategory } from '../../entities/productCategory'
import { SellType } from '../../entities/sellType'

const categoriesList = [
  {
    label: 'all',
    value: ProductCategory.ALL,
  },
  {
    label: 'sneakers',
    value: ProductCategory.SNEAKERS,
  },
  {
    label: 'jacket',
    value: ProductCategory.JACKET,
  },
  {
    label: 't-short',
    value: ProductCategory.T_SHORT,
  },

]

const saleTypesList = [

  {
    label: 'none',
    value: SellType.NONE,
  },
  {
    label: 'bestseller',
    value: SellType.BESTSELLER,
  },
]

const keyWords = ref('')
const category: Ref<ProductCategory> = ref(ProductCategory.ALL)
const saleType: Ref<SellType> = ref(SellType.NONE)
const sortType = ref('ASC')

const emits = defineEmits<{
  (e: 'updateProductsList', query: ProductsQuery): void;
}>()

const handleSetInputValue = (str: string) => {
  keyWords.value = str
}

const getProductsByQuery = () => {
  const productsQuery: ProductsQuery = {
    keywords: keyWords.value,
    category: category.value,
    sellType: saleType.value,
    sortType: sortType.value,
  }
  emits('updateProductsList', productsQuery)
}

</script>

<style scoped>

</style>