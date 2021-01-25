import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"success" | "warning" | "danger" | "info" | "primary" | "link" | "normal">;
        default: string;
    };
    size: {
        type: PropType<globalSizes>;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    buttonType: {
        type: PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (val: string) => boolean;
    };
    shadow: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: BooleanConstructor;
    square: BooleanConstructor;
    shallow: BooleanConstructor;
    dashed: BooleanConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    block: BooleanConstructor;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "success" | "warning" | "danger" | "info" | "primary" | "link" | "normal";
    size: globalSizes;
    icon: string;
    buttonType: "button" | "submit" | "reset";
    shadow: boolean;
    round: boolean;
    square: boolean;
    shallow: boolean;
    dashed: boolean;
    loading: boolean;
    disabled: boolean;
    block: boolean;
} & {}>, {
    type: "success" | "warning" | "danger" | "info" | "primary" | "link" | "normal";
    size: globalSizes;
    icon: string;
    buttonType: "button" | "submit" | "reset";
    shadow: boolean;
    round: boolean;
    square: boolean;
    shallow: boolean;
    dashed: boolean;
    loading: boolean;
    disabled: boolean;
    block: boolean;
}>;
export default _default;
