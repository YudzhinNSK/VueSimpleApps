import { Product } from '../../entities/product'
import { ProductCategory } from '../../entities/productCategory'
import { SellType } from '../../entities/sellType'

export const productsList: Product[] = [
  {
    id: '1',
    name: 'Converse Chuck 70 Renew High Top',
    price: 84.99,
    image: 'https://nonconform.ru/img/2000/2000/resize/catalog/product//1/6/162056_1.jpg',
    discount: 40,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    id: '2',
    name: 'Converse Chuck 70',
    price: 49.99,
    image: 'https://avatars.mds.yandex.net/i?id=366b4ee0b70878627cf12cb133d3642e-4795551-images-thumbs&n=13',
    discount: 0,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    id: '3',
    name: 'Convers Kids 70',
    price: 49.99,
    image: 'https://avatars.mds.yandex.net/i?id=25d467d289ee558da9deeb3c875990da-4829304-images-thumbs&n=13',
    discount: 0,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    id: '4',
    name: 'Converse Pro Chuck 80',
    price: 99.99,
    image: 'https://i.pinimg.com/originals/f3/e9/94/f3e994faa37a0784890a97334966fa8c.png',
    discount: 35,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    id: '5',
    name: 'Converse Winter Chuck 70',
    price: 99.99,
    image: 'https://static.trendme.net/temp/thumbs/1200-630-2-90/majakovska-tenisice_Tenisice_full_3000_66946.png',
    discount: 20,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    id: '6',
    name: 'Converse Winter Chuck 70 Full Black',
    price: 129.99,
    image: 'https://img.ssensemedia.com/images/202799M236008_4/converse-silver-and-multicolor-chuck-70-pride-high-sneakers.jpg',
    discount: 0,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  },
  {
    id: '7',
    name: 'Converse Winter Chuck 70 Black/White',
    price: 99.99,
    image: 'https://www.shooos.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/6/166747c-4.jpg',
    discount: 0,
    category: ProductCategory.SNEAKERS,
    sellType: SellType.BESTSELLER,
  }
]