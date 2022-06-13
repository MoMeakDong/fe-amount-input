<template>
  <div :class="['input-wrapper', definedName, { error: !!errMsg }]">
    <span class="addonBefore" v-if="addonBefore && addonBefore.open" @click="addonBeforeFn">
      {{ addonBefore.name }}
    </span>
    <input
      placeholder="请输入"
      v-model="amountStr"
      @input="onInput"
      @change="onChangeHandler"
      @focus="onFocusHandler"
    />
    <span class="addonAfter" v-if="addonAfter && addonAfter.open" @click="addonAfterFn">
      {{ addonAfter.name }}
    </span>
    <span class="errNode" v-if="errMsg">{{ errMsg }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'
import { removeNaN, moneyFormat } from './filters'
import { mReg, pureNumberReg } from './reg'
import { AmountKey, AddonAfterProp } from './type'

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

  @Prop()
  addonBefore: AddonAfterProp

  @Prop()
  addonAfter: AddonAfterProp

  @Prop()
  errMsg: string

  @Prop()
  className: string

  get definedName() {
    return this.className
  }
  @Emit('change')
  sendValue(amountStr: string, amount: number | null) {
    return { amountStr, amount }
  }

  @Emit('afterHandle')
  addonAfterFn() {
    return
  }
  @Emit('beforeHandle')
  addonBeforeFn() {
    return
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
  display: flex;
  align-items: center;
  width: 400px;
  margin: 500px auto;
  border-radius: 4px;
  border: 1px solid #dfe3e5;
  padding: 0 15px;
  height: 40px;
}
.input-wrapper input {
  flex: 1;
  height: 40px;
  line-height: 40px;
  width: 50%;
  border: 0;
  outline: none;
  font-size: 14px;
  font-family: 'Microsoft soft';
  padding: 0;
  color: #606266;
  border-radius: 4px;
}
/* input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
} */

.addonBefore,
.addonAfter {
  cursor: pointer;
  font-size: 14px;
}
.addonBefore {
  margin-right: 10px;
}
.addonAfter {
  margin-left: 10px;
}

.error {
  border-color: #ff4949;
  position: relative;
}
.error .errNode {
  color: #ff4949;
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  left: 0;
}
</style>
