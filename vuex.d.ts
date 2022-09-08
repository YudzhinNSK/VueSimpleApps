import { Store } from 'vuex'
import { Product } from './src/entities/product'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    basket: Product[]
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}