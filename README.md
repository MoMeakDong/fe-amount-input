# fe-amount-input
### 外汇专用金额输入框

#### 支持功能：Support
1. 格式化添加千分符
2. 支持快捷输入：1k -》 1，000.00  1m -》100000.00
3. 支持roundingMode规则
4. Updating
   

#### 属性介绍：property
    value: number, // 默认值 require: false
    isSupportQuick: boolean, // 是否开启快捷输入 default: false、 require: false
    precision: number, // 小数位 default: 2、 require: false
    roundingMode: number, // 尾数处理类型RoundingMode规则, default: 4 四舍五入
RoundingMode 具体规则参照 RoundModeRule.md
#### 使用方式：Use



