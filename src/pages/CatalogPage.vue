<template>
  <div class='flex flex-col w-full max-w-[1100px]'>
    <FiltersContainer @updateProductsList='handleUpdateProductsList'/>
    <ProductsContainer
      :sell-type='sellType'
      :products='mockData'
    />
  </div>
</template>

<script setup lang='ts'>
import ProductsContainer from '../containers/productsCatalog/ProductsContainer.vue'
import { productsList } from '../services/mock/products'
import { Product } from '../entities/product'
import { SellType } from '../entities/sellType'
import FiltersContainer from '../containers/productsCatalog/FiltersContainer.vue'
import { ProductsQuery } from '../services/types/productsQuery'
import { ref, Ref } from 'vue'

const mockData: Product[] = [...productsList]
const sellType: Ref<SellType> = ref(SellType.NONE)

const handleUpdateProductsList = (query: ProductsQuery) => {
  console.log(query)
  sellType.value = query.sellType ? query.sellType : SellType.NONE
}

</script>

<style scoped>

</style>