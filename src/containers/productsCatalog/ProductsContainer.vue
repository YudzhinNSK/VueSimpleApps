<template>
  <div class='products_catalog'>
      <div v-if='sellType' class='gridItem sellTypeGridItem'>
        {{sellType}}
      </div>
      <div v-for='(item, index) in products' :key='index' :class='`gridItem ${index === 0 && "bigGridItem"}`'>
          {{item.name}}
      </div>
  </div>
</template>

<script setup lang='ts'>

import { PropType } from 'vue'
import { Product } from '../../entities/product'
import { SellType } from '../../entities/sellType'

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

</script>

<style scoped>

</style>