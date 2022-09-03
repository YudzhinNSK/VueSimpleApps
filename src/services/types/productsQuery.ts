import { ProductCategory } from '../../entities/productCategory'
import { SellType } from '../../entities/sellType'

export type ProductsQuery = {
  limit: number,
  offset: number,

  //optional
  keywords?: string,
  category?: ProductCategory,
  sellType?: SellType,
}