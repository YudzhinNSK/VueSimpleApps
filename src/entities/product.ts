import { ProductCategory } from './productCategory'
import { SellType } from './sellType'

export type Product = {
  name: string,
  price: number,
  image?: string,
  discount: number,
  category: ProductCategory,
  sellType: SellType,
}