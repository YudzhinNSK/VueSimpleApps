import { ProductCategory } from '../../entities/productCategory'
import { SellType } from '../../entities/sellType'

export type ProductsQuery = {
  keywords?: string,
  category?: ProductCategory,
  sellType?: SellType,
  sortType: string
}