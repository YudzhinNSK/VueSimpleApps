<template>
  <div class='flex flex-col w-full'>
    <FiltersContainer/>
    <ProductsContainer
      :sell-type='sellType'
      :products='mockData'
    />
  </div>
</template>

<script setup lang='ts'>
import ProductsContainer from '../containers/productsCatalog/ProductsContainer.vue'
import { productsList } from '../services/mock/products'
import { Product } from '../entities/product'
import { SellType } from '../entities/sellType'
import FiltersContainer from '../containers/productsCatalog/FiltersContainer.vue'

const mockData: Product[] = [...productsList]
const sellType: SellType = SellType.BESTSELLER
</script>

<style scoped>

</style>