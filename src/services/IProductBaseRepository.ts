import { ProductsQuery } from './types/productsQuery'
import { Product } from '../entities/product'

export interface IProductBaseRepository{
  getAllProducts: () => Promise<Product[]>
  getProductsByQuery: (query: ProductsQuery) => Promise<Product[]>
}