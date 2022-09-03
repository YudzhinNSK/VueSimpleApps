import { RouteParams } from 'vue-router'

export type MenuLink = {
  label: string
  route: string
  params?: RouteParams
}