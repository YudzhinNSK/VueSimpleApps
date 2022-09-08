<template>
  <div class='header'>
    <div class='content_wrapper content_wrapper_border'>
      <div class='shop_name black_text'>
        S—Shop
      </div>
      <div class='links_container'>
        <div v-for='item in links' :key='item.route'
             :class="`header_button ${route.name === item.route && 'active_button'}`">
          <RouterLink
            :to='item.route'
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
      <div :class="`header_button ${openBasket && 'active_button'}`" @click='handleOpenBasket'>
        {{ `Basket (${store.state.basket.length})` }}
      </div>
    </div>
    <BasketContainer
      :is-basket-open='openBasket'
      @closeBasket='handleOpenBasket'
    />
  </div>
</template>

<script setup lang='ts'>
import { RouterLink, useRoute } from 'vue-router'
import { computed, PropType, ref, watch } from 'vue'
import { MenuLink } from '../components/navigation/MenuLinks'
import {useStore} from 'vuex'
import {key} from '../store/store'
import BasketContainer from '../containers/BasketContainer.vue'

const props = defineProps({
  links: {
    type: Array as PropType<MenuLink[]>,
    required: true,
    default: () => [],
  },
})


const store = useStore(key)

const openBasket = ref(false)

const handleOpenBasket = () => {
  openBasket.value = !openBasket.value
}

const route = useRoute()

</script>

<style scoped>

</style>