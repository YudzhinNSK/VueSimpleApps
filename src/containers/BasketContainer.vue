<template>
  <BasketComponent :is-basket-open='isBasketOpen' @closeBasket='handleClose'/>
</template>

<script setup lang='ts'>
import { defineEmits } from 'vue'
import BasketComponent from '../components/BasketComponent.vue'

const props = defineProps({
  isBasketOpen:{
    type: Boolean,
    required: true,
    default: () => false,
  }
})

const emits = defineEmits<{
  (e: 'closeBasket'): void;
}>()

const handleClose = () => {
  emits('closeBasket')
}
</script>

<style scoped>

</style>