import { Vue } from 'vue-property-decorator';
import { AddonAfterProp, EventTarget } from './type';
export default class AmountInput extends Vue {
    private amountStr;
    private amount;
    private showErrMsg;
    value: number;
    placeholder: string;
    isSupportQuick: boolean;
    precision: number;
    roundingMode: number;
    emptyMsg: string;
    disabled: boolean;
    required: boolean;
    theme: string;
    addonBefore: AddonAfterProp;
    addonAfter: AddonAfterProp;
    sendValue(amountStr: string, amount: number | null): {
        amountStr: string;
        amount: number | null;
    };
    addonAfterFn(): void;
    addonBeforeFn(): void;
    onInput(e: EventTarget): void;
    onFocusHandler(): void;
    onChangeHandler(): void;
    onTabHandler(e: KeyboardEvent): void;
    onEnterHandler(): void;
    convertQuickInputToRealAmount(input: string): number;
    onValueChange(val: number): void;
    onDisabledChange(val: boolean): void;
    created(): void;
    validateAmount(value: number | null, callback: () => void, emptyMsg?: string): void;
}
