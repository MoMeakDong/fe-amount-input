import Vue from 'vue'
import { CurrencyRule } from '@/components/type'

declare module 'vue/types/vue' {
  interface Vue {
    $theme: string
    $currencyConfigs: CurrencyRule[]
  }
}
