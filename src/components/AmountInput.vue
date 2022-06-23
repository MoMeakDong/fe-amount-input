<template>
  <div
    :class="[
      'input-wrapper',
      { error: !disabled && (!!errMsg || emptyInfo) },
      disabled ? 'disabled' : 'normal'
    ]"
    :style="{
      '--borderColor': theme
    }"
  >
    <span class="addonBefore" v-if="addonBefore && addonBefore.open" @click="addonBeforeFn">
      {{ addonBefore.name }}
    </span>
    <input
      :placeholder="placeholder"
      v-model="amountStr"
      @input="onInput"
      @blur="onChangeHandler"
      @focus="onFocusHandler"
      :disabled="disabled"
    />
    <span class="addonAfter" v-if="addonAfter && addonAfter.open" @click="addonAfterFn">
      {{ addonAfter.name }}
    </span>
    <span class="errNode" v-if="!disabled && (errMsg || emptyInfo)">{{ errMsg || emptyInfo }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'
import { removeNaN, moneyFormat, getEventValue } from './filters'
import { mReg, pureNumberReg } from './reg'
import { AmountKey, AddonAfterProp, EventTarget } from './type'

@Component
export default class AmountInput extends Vue {
  private amountStr = ''
  private amount: number | null = null
  private emptyInfo = ''

  @Prop({ type: Number })
  value: number

  @Prop({ type: String })
  placeholder: string

  @Prop({ type: Boolean, default: false })
  isSupportQuick: boolean

  @Prop({ type: Number, default: 2 })
  precision: number

  @Prop({ type: Number, default: 4 })
  roundingMode: number

  @Prop()
  disabled: boolean

  @Prop()
  required: boolean

  @Prop()
  theme: string

  @Prop()
  addonBefore: AddonAfterProp

  @Prop()
  addonAfter: AddonAfterProp

  @Prop()
  errMsg: string

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
    let val = getEventValue(e)
    if (this.isSupportQuick) {
      this.amountStr = val
    } else {
      val = val.match(pureNumberReg)![0] || ''
      this.amountStr = val
    }
  }

  onFocusHandler() {
    this.amountStr = this.amountStr.replace(/,/g, '')
  }

  onChangeHandler() {
    if (this.amountStr) {
      if (this.isSupportQuick && mReg.test(this.amountStr)) {
        const result = removeNaN(this.convertQuickInputToRealAmount(this.amountStr))
        this.amountStr = result
          ? moneyFormat(result.toString(), this.precision, this.roundingMode)
          : ''
      } else {
        this.amountStr = moneyFormat(this.amountStr, this.precision, this.roundingMode)
      }
      this.amount = removeNaN(Number(this.amountStr.replace(/,/g, '')))
      this.sendValue(this.amountStr, this.amount)
    } else {
      this.amount = null
    }
    // empty error
    if (this.required && !this.amount) {
      this.emptyInfo = this.emptyInfo || '请输入金额'
    } else {
      this.emptyInfo = ''
    }
  }

  convertQuickInputToRealAmount(input: string): number {
    const lastStr: string = input[input.length - 1].toUpperCase()
    const multiplier = lastStr === 'K' || lastStr === 'M' ? AmountKey[lastStr] : 1
    return Number(input.substring(0, input.length - 1)) * multiplier
  }

  @Watch('value')
  onValueChange(val: number) {
    if (this.value) {
      this.amountStr = moneyFormat(this.value.toString(), this.precision, this.roundingMode)
      this.amount = this.value
    } else {
      this.amountStr = ''
      this.amount = 0
    }
  }

  @Watch('disabled')
  onDisabledChange(val: boolean) {
    if (val) {
      this.emptyInfo = ''
    }
    this.amount = 0
    this.amountStr = ''
  }

  created() {
    if (this.value) {
      this.amountStr = moneyFormat(this.value.toString(), this.precision, this.roundingMode)
      this.amount = this.value
    } else {
      this.amountStr = ''
      this.amount = 0
    }
  }

  validateAmount(value: number | null, callback: () => void, emptyMsg?: string) {
    if (!value) {
      this.emptyInfo = emptyMsg || '请输入金额'
    } else {
      callback()
    }
  }
}
</script>
<style>
.input-wrapper {
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #dfe3e5;
  padding: 0 15px;
}
.disabled {
  background-color: #f5f7fa;
}
.normal {
  background-color: #fff;
}
.input-wrapper:focus-within {
  border-color: var(--borderColor);
}
.input-wrapper input {
  flex: 1;
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
  border-color: #f56c6c;
  position: relative;
}
.error .errNode {
  color: #f56c6c;
  position: absolute;
  bottom: -30px;
  font-size: 12px;
  left: 0;
}
</style>
