/// <reference types="react" />
export interface ActionSelectProps {
    options: Array<object>;
    onSelect: Function;
    value: string;
    placeholder?: string;
}
export declare const ActionSelect: ({ options, value, placeholder, onSelect, }: ActionSelectProps) => JSX.Element;
