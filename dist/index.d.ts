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

declare const ActionCardWidget: () => JSX.Element;

export { ActionCard, ActionCardWidget, Button };
