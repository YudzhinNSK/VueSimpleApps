<template>
  <div class='row-start-1 row-end-5'>
    <VImg
      aspect-ratio='1'
      width='100%'
      :src='product.image'
      cover
    ></VImg>
  </div>
  <div class='text-slate-400'>
    {{product.name}}
  </div>
  <div>
    {{`$${(product.price * (100 - product.discount) / 100).toFixed(2)}`}}
  </div>
  <div class='header_button underline' @click='() => handleRemoveItemFromBasket(product.id)'>
    Remove
  </div>
</template>

<script setup lang='ts'>
import { VImg } from 'vuetify/components'
import { PropType } from 'vue'
import { Product } from '../../entities/product'

const props = defineProps({
  product:{
    type: Object as PropType<Product>,
    required: true
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