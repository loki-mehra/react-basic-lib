/// <reference types="react" />
import '../shared/styles.css';
export interface ActionCardProps {
    currentData: {
        id: number;
    };
    onClose: Function;
    onNext: Function;
}
export declare const ActionCard: ({ currentData, onClose, onNext, }: ActionCardProps) => JSX.Element;
