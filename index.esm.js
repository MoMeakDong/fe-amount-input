import{Prop as n,Emit as t,Watch as e,Component as o,Vue as r}from"vue-property-decorator";import i from"decimal.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function a(n,t,e,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,o);else for(var s=n.length-1;s>=0;s--)(r=n[s])&&(a=(i<3?r(a):i>3?r(t,e,a):r(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a}var s,u=/^(-)?(\d+)(\.\d{0,})?m|M|k|K$/,d=/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,l=/^(-)?\d*(\.?\d{0,})/g,p=function(n){return Object.is(n,NaN)?null:n},A=function(n,t,e){var o=parseFloat(n);if(Object.is(o,NaN))return"";if(t<0){var r=function(n){return Math.pow(10,n)}(Math.abs(t)),i=Number(m(o/r,0,e))*r;return(Object.is(i,NaN)?"":i+"").replace(d,"$&,")}return(m(o,t,e)+"").replace(d,"$&,")},m=function(n,t,e){var o,r=new i(n);return 0===e?o=r.toFixed(t,i.ROUND_UP):1===e?o=r.toFixed(t,i.ROUND_DOWN):2===e?o=r.toFixed(t,i.ROUND_CEIL):3===e?o=r.toFixed(t,i.ROUND_FLOOR):4===e?o=r.toFixed(t,i.ROUND_HALF_UP):5===e?o=r.toFixed(t,i.ROUND_HALF_DOWN):6===e&&(o=r.toFixed(t,i.ROUND_HALF_EVEN)),o||""};!function(n){n[n.K=1e3]="K",n[n.M=1e6]="M"}(s||(s={}));var h=function(n){function t(){n.apply(this,arguments),this.amountStr="",this.amount=null,this.showErrMsg=""}return n&&(t.__proto__=n),t.prototype=Object.create(n&&n.prototype),t.prototype.constructor=t,t.prototype.sendValue=function(n,t){return{amountStr:n,amount:t}},t.prototype.addonAfterFn=function(){},t.prototype.addonBeforeFn=function(){},t.prototype.onInput=function(n){var t=function(n){return n.target.value}(n);this.isSupportQuick||(t=t.match(l)[0]||""),this.amountStr=t},t.prototype.onFocusHandler=function(){this.amountStr=this.amountStr.replace(/,/g,"")},t.prototype.onChangeHandler=function(){if(this.amountStr){if(this.isSupportQuick&&u.test(this.amountStr)){var n=p(this.convertQuickInputToRealAmount(this.amountStr));this.amountStr=n?A(n.toString(),this.precision,this.roundingMode):""}else this.amountStr=A(this.amountStr,this.precision,this.roundingMode);this.amount=p(Number(this.amountStr.replace(/,/g,""))),this.sendValue(this.amountStr,this.amount)}else this.amount=null,this.sendValue(this.amountStr,this.amount);this.required&&!this.amount?this.showErrMsg=this.showErrMsg||this.emptyMsg:this.showErrMsg=""},t.prototype.onTabHandler=function(n){"Enter"===n.key&&this.isSupportQuick&&this.onEnterHandler()},t.prototype.onEnterHandler=function(){var n;if(this.amountStr&&u.test(this.amountStr)){var t=null===(n=p(this.convertQuickInputToRealAmount(this.amountStr)))||void 0===n?void 0:n.toString();this.amountStr=t||""}},t.prototype.convertQuickInputToRealAmount=function(n){var t=n[n.length-1].toUpperCase(),e="K"===t||"M"===t?s[t]:1;return Number(n.substring(0,n.length-1))*e},t.prototype.onValueChange=function(n){this.value?(this.amountStr=A(this.value.toString(),this.precision,this.roundingMode),this.amount=this.value,this.showErrMsg=""):(this.amountStr="",this.amount=0)},t.prototype.onDisabledChange=function(n){n&&(this.showErrMsg=""),this.amount=0,this.amountStr=""},t.prototype.created=function(){this.value?(this.amountStr=A(this.value.toString(),this.precision,this.roundingMode),this.amount=this.value):(this.amountStr="",this.amount=0)},t.prototype.validateAmount=function(n,t,e){n?t():this.showErrMsg=e||this.emptyMsg},t}(r);a([n({type:Number})],h.prototype,"value",void 0),a([n({type:String})],h.prototype,"placeholder",void 0),a([n({type:Boolean,default:!1})],h.prototype,"isSupportQuick",void 0),a([n({type:Number,default:2})],h.prototype,"precision",void 0),a([n({type:Number,default:4})],h.prototype,"roundingMode",void 0),a([n({type:String,default:"请输入金额"})],h.prototype,"emptyMsg",void 0),a([n()],h.prototype,"disabled",void 0),a([n()],h.prototype,"required",void 0),a([n()],h.prototype,"theme",void 0),a([n()],h.prototype,"addonBefore",void 0),a([n()],h.prototype,"addonAfter",void 0),a([t("change")],h.prototype,"sendValue",null),a([t("afterHandle")],h.prototype,"addonAfterFn",null),a([t("beforeHandle")],h.prototype,"addonBeforeFn",null),a([e("value")],h.prototype,"onValueChange",null),a([e("disabled")],h.prototype,"onDisabledChange",null);var c=h=a([o],h);function f(n,t,e,o,r,i,a,s,u,d){"boolean"!=typeof a&&(u=s,s=a,a=!1);var l,p="function"==typeof e?e.options:e;if(n&&n.render&&(p.render=n.render,p.staticRenderFns=n.staticRenderFns,p._compiled=!0,r&&(p.functional=!0)),o&&(p._scopeId=o),i?(l=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),t&&t.call(this,u(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},p._ssrRegister=l):t&&(l=a?function(n){t.call(this,d(n,this.$root.$options.shadowRoot))}:function(n){t.call(this,s(n))}),l)if(p.functional){var A=p.render;p.render=function(n,t){return l.call(t),A(n,t)}}else{var m=p.beforeCreate;p.beforeCreate=m?[].concat(m,l):[l]}return e}var g,v="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function b(n){return function(n,t){return function(n,t){var e=v?t.media||"default":n,o=y[e]||(y[e]={ids:new Set,styles:[]});if(!o.ids.has(n)){o.ids.add(n);var r=t.source;if(t.map&&(r+="\n/*# sourceURL="+t.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===g&&(g=document.head||document.getElementsByTagName("head")[0]),g.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(r),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var i=o.ids.size-1,a=document.createTextNode(r),s=o.element.childNodes;s[i]&&o.element.removeChild(s[i]),s.length?o.element.insertBefore(a,s[i]):o.element.appendChild(a)}}}(n,t)}}var y={};var S=c,C=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{class:["input-wrapper",{error:!n.disabled&&n.showErrMsg},n.disabled?"disabled":"normal"],style:{"--borderColor":n.theme}},[n.addonBefore&&n.addonBefore.open?e("span",{staticClass:"addonBefore",on:{click:n.addonBeforeFn}},[n._v("\n    "+n._s(n.addonBefore.name)+"\n  ")]):n._e(),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.amountStr,expression:"amountStr"}],attrs:{placeholder:n.placeholder,disabled:n.disabled},domProps:{value:n.amountStr},on:{input:[function(t){t.target.composing||(n.amountStr=t.target.value)},n.onInput],blur:n.onChangeHandler,focus:n.onFocusHandler,keydown:n.onTabHandler}}),n._v(" "),n.addonAfter&&n.addonAfter.open?e("span",{staticClass:"addonAfter",on:{click:n.addonAfterFn}},[n._v("\n    "+n._s(n.addonAfter.name)+"\n  ")]):n._e(),n._v(" "),!n.disabled&&n.showErrMsg?e("span",{staticClass:"errNode"},[n._v(n._s(n.showErrMsg))]):n._e()])};C._withStripped=!0;var E=f({render:C,staticRenderFns:[]},(function(n){n&&n("data-v-dd410be8_0",{source:"\n.input-wrapper {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  border: 1px solid #dfe3e5;\n  padding: 0 15px;\n}\n.disabled {\n  background-color: #f5f7fa;\n}\n.normal {\n  background-color: #fff;\n}\n.input-wrapper:focus-within {\n  border-color: var(--borderColor);\n}\n.input-wrapper input {\n  flex: 1;\n  line-height: 40px;\n  width: 50%;\n  border: 0;\n  outline: none;\n  font-size: 14px;\n  font-family: 'Microsoft soft';\n  padding: 0;\n  color: #606266;\n  border-radius: 4px;\n}\n.addonBefore,\n.addonAfter {\n  cursor: pointer;\n  font-size: 14px;\n}\n.addonBefore {\n  margin-right: 10px;\n}\n.addonAfter {\n  margin-left: 10px;\n}\n.error {\n  border-color: #f56c6c;\n  position: relative;\n}\n.error .errNode {\n  color: #f56c6c;\n  position: absolute;\n  bottom: -30px;\n  font-size: 12px;\n  left: 0;\n}\n",map:{version:3,sources:["/Users/dongmk/Documents/myPro/fe-amount-input/src/components/AmountInput.vue"],names:[],mappings:";AAwLA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,eAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,gCAAA;AACA;AACA;EACA,OAAA;EACA,iBAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;EACA,eAAA;EACA,6BAAA;EACA,UAAA;EACA,cAAA;EACA,kBAAA;AACA;AAEA;;EAEA,eAAA;EACA,eAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,iBAAA;AACA;AAEA;EACA,qBAAA;EACA,kBAAA;AACA;AACA;EACA,cAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,OAAA;AACA",file:"AmountInput.vue",sourcesContent:["<template>\n  <div\n    :class=\"['input-wrapper', { error: !disabled && showErrMsg }, disabled ? 'disabled' : 'normal']\"\n    :style=\"{\n      '--borderColor': theme\n    }\"\n  >\n    <span class=\"addonBefore\" v-if=\"addonBefore && addonBefore.open\" @click=\"addonBeforeFn\">\n      {{ addonBefore.name }}\n    </span>\n    <input\n      :placeholder=\"placeholder\"\n      v-model=\"amountStr\"\n      :disabled=\"disabled\"\n      @input=\"onInput\"\n      @blur=\"onChangeHandler\"\n      @focus=\"onFocusHandler\"\n      @keydown=\"onTabHandler\"\n    />\n    <span class=\"addonAfter\" v-if=\"addonAfter && addonAfter.open\" @click=\"addonAfterFn\">\n      {{ addonAfter.name }}\n    </span>\n    <span class=\"errNode\" v-if=\"!disabled && showErrMsg\">{{ showErrMsg }}</span>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'\nimport { removeNaN, moneyFormat, getEventValue } from './filters'\nimport { mReg, pureNumberReg } from './reg'\nimport { AmountKey, AddonAfterProp, EventTarget } from './type'\n\n@Component\nexport default class AmountInput extends Vue {\n  private amountStr = ''\n  private amount: number | null = null\n  private showErrMsg = ''\n\n  @Prop({ type: Number })\n  value: number\n\n  @Prop({ type: String })\n  placeholder: string\n\n  @Prop({ type: Boolean, default: false })\n  isSupportQuick: boolean\n\n  @Prop({ type: Number, default: 2 })\n  precision: number\n\n  @Prop({ type: Number, default: 4 })\n  roundingMode: number\n\n  @Prop({ type: String, default: '请输入金额' })\n  emptyMsg: string\n\n  @Prop()\n  disabled: boolean\n\n  @Prop()\n  required: boolean\n\n  @Prop()\n  theme: string\n\n  @Prop()\n  addonBefore: AddonAfterProp\n\n  @Prop()\n  addonAfter: AddonAfterProp\n\n  @Emit('change')\n  sendValue(amountStr: string, amount: number | null) {\n    return { amountStr, amount }\n  }\n\n  @Emit('afterHandle')\n  addonAfterFn() {\n    return\n  }\n\n  @Emit('beforeHandle')\n  addonBeforeFn() {\n    return\n  }\n\n  onInput(e: EventTarget) {\n    let val = getEventValue(e)\n    if (this.isSupportQuick) {\n      this.amountStr = val\n    } else {\n      val = val.match(pureNumberReg)![0] || ''\n      this.amountStr = val\n    }\n  }\n\n  onFocusHandler() {\n    this.amountStr = this.amountStr.replace(/,/g, '')\n  }\n\n  onChangeHandler() {\n    if (this.amountStr) {\n      if (this.isSupportQuick && mReg.test(this.amountStr)) {\n        const result = removeNaN(this.convertQuickInputToRealAmount(this.amountStr))\n        this.amountStr = result\n          ? moneyFormat(result.toString(), this.precision, this.roundingMode)\n          : ''\n      } else {\n        this.amountStr = moneyFormat(this.amountStr, this.precision, this.roundingMode)\n      }\n      this.amount = removeNaN(Number(this.amountStr.replace(/,/g, '')))\n      this.sendValue(this.amountStr, this.amount)\n    } else {\n      this.amount = null\n      this.sendValue(this.amountStr, this.amount)\n    }\n    // empty error\n    if (this.required && !this.amount) {\n      this.showErrMsg = this.showErrMsg || this.emptyMsg\n    } else {\n      this.showErrMsg = ''\n    }\n  }\n\n  onTabHandler(e: KeyboardEvent) {\n    if (e.key === 'Enter' && this.isSupportQuick) {\n      this.onEnterHandler()\n    }\n  }\n\n  onEnterHandler() {\n    if (this.amountStr && mReg.test(this.amountStr)) {\n      const result = removeNaN(this.convertQuickInputToRealAmount(this.amountStr))?.toString()\n      this.amountStr = result || ''\n    }\n  }\n\n  convertQuickInputToRealAmount(input: string): number {\n    const lastStr: string = input[input.length - 1].toUpperCase()\n    const multiplier = lastStr === 'K' || lastStr === 'M' ? AmountKey[lastStr] : 1\n    return Number(input.substring(0, input.length - 1)) * multiplier\n  }\n\n  @Watch('value')\n  onValueChange(val: number) {\n    if (this.value) {\n      this.amountStr = moneyFormat(this.value.toString(), this.precision, this.roundingMode)\n      this.amount = this.value\n      this.showErrMsg = ''\n    } else {\n      this.amountStr = ''\n      this.amount = 0\n    }\n  }\n\n  @Watch('disabled')\n  onDisabledChange(val: boolean) {\n    if (val) {\n      this.showErrMsg = ''\n    }\n    this.amount = 0\n    this.amountStr = ''\n  }\n\n  created() {\n    if (this.value) {\n      this.amountStr = moneyFormat(this.value.toString(), this.precision, this.roundingMode)\n      this.amount = this.value\n    } else {\n      this.amountStr = ''\n      this.amount = 0\n    }\n  }\n\n  validateAmount(value: number | null, callback: () => void, emptyMsg?: string) {\n    if (!value) {\n      this.showErrMsg = emptyMsg || this.emptyMsg\n    } else {\n      callback()\n    }\n  }\n}\n<\/script>\n<style>\n.input-wrapper {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  border: 1px solid #dfe3e5;\n  padding: 0 15px;\n}\n.disabled {\n  background-color: #f5f7fa;\n}\n.normal {\n  background-color: #fff;\n}\n.input-wrapper:focus-within {\n  border-color: var(--borderColor);\n}\n.input-wrapper input {\n  flex: 1;\n  line-height: 40px;\n  width: 50%;\n  border: 0;\n  outline: none;\n  font-size: 14px;\n  font-family: 'Microsoft soft';\n  padding: 0;\n  color: #606266;\n  border-radius: 4px;\n}\n\n.addonBefore,\n.addonAfter {\n  cursor: pointer;\n  font-size: 14px;\n}\n.addonBefore {\n  margin-right: 10px;\n}\n.addonAfter {\n  margin-left: 10px;\n}\n\n.error {\n  border-color: #f56c6c;\n  position: relative;\n}\n.error .errNode {\n  color: #f56c6c;\n  position: absolute;\n  bottom: -30px;\n  font-size: 12px;\n  left: 0;\n}\n</style>\n"]},media:void 0})}),S,undefined,false,undefined,!1,b,void 0,void 0),M={install:function(n,t){n.component("AmountInput",E)}};export{E as AmountInput,M as default};
