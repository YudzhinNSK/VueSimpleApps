import { ProductsQuery } from './types/productsQuery'
import { Product } from '../entities/product'
import { ProductsQueryResult } from './mock/BaseMockProductsRepository'

export interface IProductBaseRepository{
  getAllProducts: () => Promise<Product[]>
  getProductsByQuery: (query: ProductsQuery) => Promise<ProductsQueryResult>
  getProductById: (id: string) => Promise<Product | undefined>
}