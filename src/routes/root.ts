import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from './../pages/CatalogPage.vue'
import NavLayout from './../layout/NavLayout.vue'
import { MenuLink } from '../components/navigation/MenuLinks'

export enum ShopNamedRoutes {
  CATALOG = '/catalog',
  PROFILE = '/profile'
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: NavLayout,
      props:{
        links: [
          {
            label: "Catalog",
            route: ShopNamedRoutes.CATALOG,
          },
          {
            label: "Profile",
            route: ShopNamedRoutes.PROFILE,
          }
        ] as MenuLink[]
      },
      children: [
        {
          path: "catalog",
          name: ShopNamedRoutes.CATALOG,
          component: CatalogPage,
        }
      ]
    },
  ],
})