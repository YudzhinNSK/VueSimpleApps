import { IProductBaseRepository } from '../IProductBaseRepository'
import { Product } from '../../entities/product'
import { ProductsQuery } from '../types/productsQuery'

export class BaseMockProductsRepository implements IProductBaseRepository{
  getAllProducts(): Promise<Product[]> {
    return Promise.resolve([] as Product[])
  }

  getProductsByQuery(query: ProductsQuery): Promise<Product[]> {
    return Promise.resolve([] as Product[])
  }

}