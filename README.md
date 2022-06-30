# *fe-amount-input*  *外汇专用金额输入框*
---

#### Install

```
npm i fe-amount-input
```
#### Description

The amount input plug-in provided for foreign exchange supports rounding rules for amounts in corresponding currencies.

---
#### Support
>1. 格式化添加千分符
>2. 支持快捷输入：1k -》 1,000   1m -》1,000,000
>3. 支持roundingMode规则
>4. 支持复合型输入框
>5. Updating
   
---

#### Props
```ts
interface AddonAfterProp {
  name: string
  open: boolean
}
// Props
{ 
    value: number, // 默认值 require: false
    disabled: boolean, 
    required: boolean, //必填
    placeholder: string,
    theme: string, // 主题色
    isSupportQuick: boolean, // 是否开启快捷输入 default: false 
    emptyMsg: string, // 开启必填校验时，未输入的提示信息 default: '请输入金额'
    precision: number, // 小数位 default: 2 
    roundingMode: number, // 尾数处理类型RoundingMode规则, default: 4 四舍五入
    addonBefore: AddonAfterProp
    addonAfter: AddonAfterProp
}
// funcs
change({amountStr: string, amount: number | null}){
    //
}
afterHandle(){}
beforeHandle(){}
```


RoundingMode 具体规则参照 [RoundModeRule.md](https://github.com/MoMeakDong/fe-amount-input/blob/master/RoundModeRule.md)。

Refer to [RoundModeRule.md](https://github.com/MoMeakDong/fe-amount-input/blob/master/RoundModeRule.md) for specific rules of RoundingMode.

---
#### Usage

```ts
 import { AmountInput } from 'fe-amount-input'

 function changeSellMountHandler({amountStr: string, amount: number | null}){
    //
 }

 <AmountInput
    ref="sellAmountInput"
    emptyMsg="请输入数量"
    isSupportQuick={true}
    required={true}
    theme="#11A983"
    precision={2}
    roundingMode={4}
    value={0}
    change="changeSellMountHandler"
/>
          
```



---



