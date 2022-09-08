<template>
  <div class='flex flex-col w-full h-full px-10 py-5 border-b-[1px] border-gray-900'>
    <div class='text-uppercase font-bold text-2xl'>Total</div>
    <div class='flex flex-row justify-between mt-4'>
      <span>Subtotal:</span>
      <span>{{`$${subTotal}`}}</span>
    </div>
    <div class='flex flex-row justify-between mt-4'>
      <span>Sale:</span>
      <span>{{`$${sale}`}}</span>
    </div>
    <div class='flex flex-row justify-between mt-4'>
      <span>Content:</span>
      <span class='header_button underline' @click='handleRestoreBasket'>Remove all</span>
    </div>
  </div>

  <div class='w-full h-full px-10 py-5 border-b-[1px] border-gray-900'>
    <div class='flex items-center flex-row justify-between text-xl'>
      <span>Order Total:</span>
      <span>{{`$${total}`}}</span>
    </div>
  </div>
</template>

<script setup lang='ts'>

const props = defineProps({
  subTotal:{
    type: Number,
    required: true,
    default: () => 0
  },
  sale:{
    type: Number,
    required: true,
    default: () => 0
  },
  total:{
    type: Number,
    required: true,
    default: () => 0
  },
})

const handleRestoreBasket = () => {
  emits('restoreBasket')
}

const emits = defineEmits<{
  (e: 'restoreBasket'): void
}>()

</script>

<style scoped>

</style>