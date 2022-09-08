<template>
  <div class='flex flex-col w-full max-w-[1100px]'>
    <FiltersContainer @updateProductsList='handleUpdateProductsList' />
    <ProductsContainer
      :sell-type='sellType'
      :products='products'
      @addProductToCard='handleAddProductInCard'
    />
  </div>
</template>

<script setup lang='ts'>
import ProductsContainer from '../containers/productsCatalog/ProductsContainer.vue'
import { productsList } from '../services/mock/products'
import { Product } from '../entities/product'
import { SellType } from '../entities/sellType'
import FiltersContainer from '../containers/productsCatalog/FiltersContainer.vue'
import { ProductsQuery } from '../services/types/productsQuery'
import { onMounted, ref, Ref } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import { BaseMockProductsRepository } from '../services/mock/BaseMockProductsRepository'

const mockRepository: BaseMockProductsRepository = new BaseMockProductsRepository(productsList)

const products: Ref<Product[]> = ref([])
const sellType: Ref<SellType> = ref(SellType.NONE)

const store = useStore(key)

const handleUpdateProductsList = async (query: ProductsQuery) => {
  try {
    const response = await mockRepository.getProductsByQuery(query)
    if (!response) return
    products.value = response.items

  } catch (e) {
    console.error(e)
  }
}

const handleAddProductInCard = (data: Product) => {
  store.state.basket.push(data)
}

const fillTheBasket = async () => {
  if(!localStorage.basket) return
  const basket: Product[] = []
  for (const id of localStorage.basket) {
    const product: Product | undefined = await mockRepository.getProductById(id)
    if(!product) continue
    basket.push(product)
  }
  store.state.basket = [...basket]
}

onMounted(async () => {
  try {
    const response = await mockRepository.getAllProducts()
    if (!response) return
    products.value = response
    fillTheBasket()
  } catch (e) {
    console.error(e)
  }

})

</script>

<style scoped>

</style>