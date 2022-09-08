<template>
  <div class='w-full h-full px-10 py-5'>
    <div v-for='item in productsInBasket' :key='item.id' class='h-[100px] mb-5 grid grid-cols-[100px_1fr] grid-rows-3 gap-2'>
      <BasketProductItem
        :product='item'
        @removeItemFromBasket='handleRemoveItemFromBasket'
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { VImg } from 'vuetify/components'
import { Product } from '../../entities/product'
import { PropType } from 'vue'
import BasketProductItem from '../../components/Basket/BasketProductItem.vue'

const props = defineProps({
  productsInBasket: {
    type: Array as PropType<Product[]>,
    required: true,
    default: () => []
  }
})

const handleRemoveItemFromBasket = (id: string) => {
  emits('removeItemFromBasket', id)
}

const emits = defineEmits<{
  (e: 'removeItemFromBasket', id: string): void
}>()

</script>

<style scoped>

</style>