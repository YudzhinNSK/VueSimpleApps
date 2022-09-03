import { Product } from '../../entities/product'
import { ProductCategory } from '../../entities/productCategory'
import { SellType } from '../../entities/sellType'

export const productsList: Product[] = [
  {
    name: 'Converse Chuck 70 Renew High Top',
    price: 84.99,
    image: '',
    discount: 40,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    name: 'Converse Chuck 70',
    price: 49.99,
    image: '',
    discount: 0,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    name: 'Convers Kids 70',
    price: 49.99,
    image: '',
    discount: 0,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    name: 'Converse Pro Chuck 80',
    price: 99.99,
    image: '',
    discount: 35,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    name: 'Converse Winter Chuck 70',
    price: 99.99,
    image: '',
    discount: 20,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    name: 'Converse Winter Chuck 70 Full Black',
    price: 129.99,
    image: '',
    discount: 0,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    name: 'Converse Winter Chuck 70 Black/White',
    price: 99.99,
    image: '',
    discount: 0,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  }
]