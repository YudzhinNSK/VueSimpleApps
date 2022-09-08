<template>
  <div
    :class='`${!isBasketOpen && "hidden" } fixed w-full h-screen top-0 left-0 bg-zinc-700 opacity-60 z-20`'
    @click='handleCloseBasket'
  />
  <div
    :class='`${!isBasketOpen && "hidden" } flex flex-col absolute bg-white top-0 right-0 w-[455px] min-h-[400px] h-fit z-30 `'>
    <div class='h-[65px] border-b-[1px] border-gray-900 flex flex-row justify-between items-center px-24'>
      <div class='ml-24'>
        <RouterLink
          to='/profile'
        >
          Profile
        </RouterLink>
      </div>
      <div :class="`header_button ${isBasketOpen && 'active_button'}`" @click='handleCloseBasket'>
        {{ `Basket (${store.state.basket.length})` }}
      </div>
    </div>

    <template v-if='store.state.basket.length === 0'>
      <div class='flex items-center justify-center grow text-xl S'>
        Oops, your basket is empty.
      </div>
    </template>

    <template v-else>
      <div class='grid grid-rows-[216px_65px_1fr_65px] grow'>

        <BasketPrice
          :sub-total='subTotal'
          :sale='sale'
          :total='total'
          @restoreBasket='handleRestoreBasket'
        />

        <BasketItemsContainer
          :products-in-basket='store.state.basket'
          @removeItemFromBasket='handleRemoveItemFromBasket'
        />

        <div class='w-full h-full px-10 bg-black py-5 flex flex-row justify-between cursor-pointer'
             @click='handleCloseBasket'>
          <span>
            Checkout
          </span>
          <span>
            >
          </span>
        </div>
      </div>
    </template>

  </div>
</template>

<script setup lang='ts'>
import { VImg } from 'vuetify/components'
import { defineEmits, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import BasketPrice from './Basket/BasketPrice.vue'
import BasketItemsContainer from '../containers/Basket/BasketItemsContainer.vue'
import { Product } from '../entities/product'

const props = defineProps({
  isBasketOpen: {
    type: Boolean,
    required: true,
    default: () => false,
  },
})

const store = useStore(key)

const subTotal = ref(0)
const sale = ref(0)
const total = ref(0)

const handleCloseBasket = () => {
  emits('closeBasket')
}

watch(store.state, () => {
  total.value = Number((getSubTotal() - getSale()).toFixed(2))
  const basketProductsIds: string[] = []
  store.state.basket.forEach((item) => {
    basketProductsIds.push(item.id)
  })
  localStorage.basket = [...basketProductsIds]
})


const getSubTotal = (): number => {
  let res = 0
  store.state.basket.forEach((item) => {
    res += item.price
  })
  subTotal.value = Number(res.toFixed(2))
  return Number(res.toFixed(2))
}

const getSale = (): number => {
  let res = 0
  store.state.basket.forEach((item) => {
    if (!item.discount) return
    res += item.price * item.discount / 100
  })
  sale.value = Number(res.toFixed(2))
  return Number(res.toFixed(2))
}

const handleRestoreBasket = () => {
  store.state.basket = []
}

const handleRemoveItemFromBasket = (id: string) => {
  const newBasket: Product[] = store.state.basket.filter((item) => item.id !== id)
  store.state.basket = [...newBasket]
}

const emits = defineEmits<{
  (e: 'closeBasket'): void;
}>()
</script>

<style scoped>

</style>