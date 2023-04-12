/// <reference types="react" />
interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

interface ActionCardProps {
    currentData: {
        id: number;
    };
    onClose: Function;
    onNext: Function;
}
declare const ActionCard: ({ currentData, onClose, onNext, }: ActionCardProps) => JSX.Element;

interface ActionCardWidgetProps {
    classNames?: string;
}
declare const ActionCardWidget: ({ classNames }: ActionCardWidgetProps) => JSX.Element;

export { ActionCard, ActionCardWidget, Button };
