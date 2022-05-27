<template>
  <div class="input-wrapper">
    <input
      placeholder="请输入"
      v-model="amountStr"
      @input="onInput"
      @change="onChangeHandler"
      @focus="onFocusHandler"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'
import { removeNaN, moneyFormat } from './filters'
import { mReg, pureNumberReg } from './reg'
import { AmountKey } from './type'

interface EventTarget {
  target: HTMLInputElement
}
@Component
export default class AmountInput extends Vue {
  private amountStr = ''
  private amount: number | null = null

  @Prop({ type: Number, default: 1984 })
  value: number
  @Prop({ type: Boolean, default: true })
  isSupportQuick: boolean

  @Prop({ type: Number, default: 2 })
  precision: number

  @Prop({ type: Number, default: 4 })
  roundingMode: number

  // @Prop({
  //   type: Object,
  //   default: {
  //     formatStr: '数据格式错误',
  //     emptyStr: '请输入金额'
  //   }
  // })
  // errMsg: Record<string, never>

  // @Prop({ type: RegExp })
  // rule: RegExp

  @Emit('change')
  sendValue(amountStr: string, amount: number | null) {
    return { amountStr, amount }
  }

  onInput(e: EventTarget) {
    let val = this.getEventValue(e)
    if (this.isSupportQuick) {
      this.amountStr = val
    } else {
      val = val.match(pureNumberReg)![0] || ''
      this.amountStr = val
    }
  }

  getEventValue(e: EventTarget): string {
    return e.target.value
  }

  onFocusHandler() {
    this.amountStr = this.amountStr.replace(/,/g, '')
  }

  onChangeHandler() {
    if (this.amountStr) {
      if (this.isSupportQuick && mReg.test(this.amountStr)) {
        let result = removeNaN(this.convertQuickInputToRealAmount(this.amountStr))
        this.amountStr = result
          ? moneyFormat(result.toString(), this.precision, this.roundingMode)
          : ''
      } else {
        this.amountStr = moneyFormat(this.amountStr, this.precision, this.roundingMode)
      }
      this.amount = removeNaN(parseFloat(this.amountStr.replace(/,/g, '')))
      this.sendValue(this.amountStr, this.amount)
    }
  }

  convertQuickInputToRealAmount(input: string): number {
    const lastStr: string = input[input.length - 1].toUpperCase()
    const multiplier = lastStr === 'K' || lastStr === 'M' ? AmountKey[lastStr] : 1
    return Number(input.substring(0, input.length - 1)) * multiplier
  }

  @Watch('value')
  onValueChange(val: number) {
    this.amountStr = moneyFormat(val.toString(), this.precision, this.roundingMode)
    this.amount = val
  }

  created() {
    this.amountStr = moneyFormat(this.value.toString(), this.precision, this.roundingMode)
    this.amount = this.value
  }
}
</script>
<style>
.input-wrapper {
  text-align: center;
}
.input-wrapper input {
  height: 30px;
  line-height: 30px;
  width: 50%;
  border: 0;
  border: 1px solid #606266;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-family: 'Microsoft soft';
  padding: 0 5px;
  color: #606266;
}
input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
</style>
