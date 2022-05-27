import Vue from 'vue'
import App from './App.vue'
import AmountInput from './components/AmountInput.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(AmountInput)
}).$mount('#app')
