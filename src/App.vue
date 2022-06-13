<template>
  <div id="app">
    <button @click="add">change value</button>
    <amount-input
      :value="value"
      @change="handleChange"
      :addonAfter="afterObj"
      :addonBefore="beforeObj"
      :errMsg="errMsg"
      @afterHandle="afterHandle"
      @beforeHandle="beforeHandle"
      :isSupportQuick="isSupportQuick"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AmountInput from './components/AmountInput.vue'

@Component({
  components: {
    AmountInput
  }
})
export default class App extends Vue {
  value = 0
  errMsg = '请输入金额'
  isSupportQuick = false

  afterObj = {
    name: '全部余额',
    open: true
  }

  beforeObj = {
    name: 'USD',
    open: true
  }

  add() {
    // this.value += 1
    this.isSupportQuick = true
  }

  handleChange(value: { amountStr: string; amount: number | null }) {
    // console.log(111, value)
    this.errMsg = ''
  }
  afterHandle() {
    // alert(3)
  }

  beforeHandle() {
    // alert(4)
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
