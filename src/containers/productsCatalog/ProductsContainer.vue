<template>
  <div class='products_catalog'>
      <div class='gridItem sellTypeGridItem'>
        <div class='font-bold text-4xl uppercase h-full'>
          {{`${sellType !== SellType.NONE ? sellType : 'Founded'} ${products.length}`}}
        </div>
      </div>
      <div v-for='(item, index) in products' :key='item.id' :class='`gridItem ${index === 0 && "bigGridItem"}`'>
          <ProductCard
            :product='item'
            @addToCard='handleAddToCard'
          />
      </div>
  </div>
</template>

<script setup lang='ts'>

import { computed, defineEmits, PropType } from 'vue'
import { Product } from '../../entities/product'
import { SellType } from '../../entities/sellType'
import ProductCard from '../../components/ProductCard.vue'

const props = defineProps({
  sellType: {
    type: String as PropType<SellType>,
    required: false,
  },
  products: {
    type: Array as PropType<Product[]>,
    required: true,
    default: () => []
  }
})

const emit = defineEmits<{
  (e: 'addProductToCard', item: Product): void;
}>()

const handleAddToCard = (data: Product) => {
  emit('addProductToCard', data)
}

</script>

<style scoped>

</style>