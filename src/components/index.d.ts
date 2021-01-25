/**
 * @file: index.ts All components list
 * !NOTICE: This file will be overwrite by build/build.js or build/dev.js
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */
import { VueApp } from 'utils/types';
declare const _default: {
    Button: import("vue").DefineComponent<{
        type: {
            type: import("vue").PropType<"success" | "warning" | "danger" | "info" | "primary" | "link" | "normal">;
            default: string;
        };
        size: {
            type: import("vue").PropType<globalSizes>;
            default: string;
        };
        icon: {
            type: StringConstructor;
            default: string;
        };
        buttonType: {
            type: import("vue").PropType<"button" | "submit" | "reset">;
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
    components: import("vue").DefineComponent<{
        type: {
            type: import("vue").PropType<"success" | "warning" | "danger" | "info" | "primary" | "link" | "normal">;
            default: string;
        };
        size: {
            type: import("vue").PropType<globalSizes>;
            default: string;
        };
        icon: {
            type: StringConstructor;
            default: string;
        };
        buttonType: {
            type: import("vue").PropType<"button" | "submit" | "reset">;
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
    }>[];
    install: (app: VueApp) => void;
};
export default _default;
