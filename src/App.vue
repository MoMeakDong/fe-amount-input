<template>
  <div id="app">
    <button @click="add">change value</button>
    <amount-input :value="value" @change="handleChange" />
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

  add() {
    this.value += 1
  }

  handleChange(value: { amountStr: string; amount: number | null }) {
    // console.log(111, value)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
