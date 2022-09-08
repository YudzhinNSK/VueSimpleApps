// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { Product } from '../entities/product'

// define your typings for the store state
export interface State {
  basket: Product[]
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    basket: []
  }
})
