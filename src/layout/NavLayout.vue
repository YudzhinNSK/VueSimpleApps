<template>
  <div
    style='
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    '
  >
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
        <div class='header_button'>
          Basket
        </div>
      </div>
    </div>
    <div class='body_content_wrapper'>
      <router-view />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { RouterLink, useRoute } from 'vue-router'
import { computed, PropType, watch } from 'vue'
import { MenuLink } from '../components/navigation/MenuLinks'

const props = defineProps({
  links: {
    type: Array as PropType<MenuLink[]>,
    required: true,
    default: () => [],
  },
})

const route = useRoute()

</script>

<style scoped>

</style>