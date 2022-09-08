<template>
  <div class='grid grid-rows-[1fr_55px_55px] gap-1 h-full relative'>
    <div
      v-if='product.discount > 0'
      class='absolute z-10 bg-orange-500 w-[121px] h-[43px] top-2 right-2 text-white flex items-center justify-center'>
      {{ `Sale -${product.discount}%` }}
    </div>
    <VImg
      aspect-ratio='1'
      width='100%'
      :src='product.image'
      cover
    ></VImg>
    <div class='flex flex-col text-sm'>
      <div>
        {{ product.name }}
      </div>
      <div class='flex flex-row'>
        <div v-if='product.discount > 0' class='mr-2 font-bold'>
          {{ `$${(product.price * (100 - product.discount) / 100).toFixed(2)}` }}
        </div>
        <div
          :class='`font-bold ${product.discount > 0 && "line-through decoration-black decoration-2 text-slate-300"}`'>
          {{ `$${product.price}` }}
        </div>
      </div>
    </div>
    <VBtn
      v-if='!isChosen'
      :rounded='0'
      color='black'
      flat
      height='100%'
      width='100%'
      max-width='335px'
      rounded='false'
      @click='$emit("addToCard", product)'
    >
      Add to basket +
    </VBtn>
    <VBtn
      v-else
      :rounded='0'
      color='white'
      border='1px solid black'
      flat
      height='100%'
      width='100%'
      max-width='335px'
      rounded='false'
      @click='$emit("addToCard", product)'
    >
      Added ✓
    </VBtn>
  </div>
</template>

<script setup lang='ts'>
import { VBtn, VImg } from 'vuetify/components'
import { PropType, ref, watch } from 'vue'
import { Product } from '../entities/product'
import { useStore } from 'vuex'
import { key } from '../store/store'

const store = useStore(key)

const isChosen = ref(false)

const isProductInCard = (data: Product) => Boolean(store.state.basket.find((item) => item.id === data.id))

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
    default: () => {
    },
  },
})

watch(store.state, () => {
  isChosen.value = isProductInCard(props.product)
})

const emits = defineEmits<{
  (e: 'addToCard', productId: string): void;
}>()

</script>

<style scoped>

</style>