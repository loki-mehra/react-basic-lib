/// <reference types="react" />
interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare const ActionCard: ({ onClose, currentData, onNext }: {
    onClose: any;
    currentData: any;
    onNext: any;
}) => JSX.Element;

declare const ActionCardWidget: () => JSX.Element;

export { ActionCard, ActionCardWidget, Button };
