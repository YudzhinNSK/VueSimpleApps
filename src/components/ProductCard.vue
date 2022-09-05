<template>
  <div class='grid grid-rows-[1fr_55px_55px] gap-1 h-full'>
    <VImg
      aspect-ratio='16/9'
      width='100%'
      :src='product.image'
      cover
    ></VImg>
    <div class='flex flex-col text-sm'>
      <div>
        {{ product.name }}
      </div>
      <div class='font-bold'>
        {{ `$${product.price}` }}
      </div>
    </div>
    <VBtn
      :rounded='0'
      color='black'
      flat
      height='100%'
      width='100%'
      max-width='335px'
      rounded='false'
    >
      Add to basket +
    </VBtn>
  </div>
</template>

<script setup lang='ts'>
import { VBtn, VImg } from 'vuetify/components'
import { PropType } from 'vue'
import { Product } from '../entities/product'

const props = defineProps({
  product: Object as PropType<Product>,
})

const emits = defineEmits<{
  (e: 'addToCard', productId: string): void;
}>()

</script>

<style scoped>

</style>