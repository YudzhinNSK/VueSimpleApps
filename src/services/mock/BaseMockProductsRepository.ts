import { IProductBaseRepository } from '../IProductBaseRepository'
import { Product } from '../../entities/product'
import { ProductsQuery } from '../types/productsQuery'
import { ProductCategory } from '../../entities/productCategory'
import { SellType } from '../../entities/sellType'

export type ProductsQueryResult = {
  items: Product[]
}

export class BaseMockProductsRepository implements IProductBaseRepository{

  private storage: Product[]

  constructor(storage: Product[]){
    this.storage = storage
  }

  async getAllProducts(): Promise<Product[]> {
    return this.storage
  }

  async getProductsByQuery(query: ProductsQuery): Promise<ProductsQueryResult> {

    const filtered = [...this.storage].filter((item) => {
      if (query.keywords && !item.name.includes(query.keywords)) return false

      if (query.sellType && item.sellType === SellType.NONE && item.sellType !== query.sellType) return false

      if (query.category && query.category !== ProductCategory.ALL && item.category !== query.category) return false

      return true
    })

    return {
      items: filtered
    }
  }

  async getProductById(id: string): Promise<Product | undefined>{
    return  this.storage.find((item) => item.id === id)
  }

}