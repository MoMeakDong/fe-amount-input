import AmountInput from './components/AmountInput.vue'
import type { VueConstructor } from 'vue'

export { AmountInput }

export default {
  install(Vue: VueConstructor, options: any) {
    Vue.component('AmountInput', AmountInput)
  }
}
