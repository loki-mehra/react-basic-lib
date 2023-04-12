declare const dummyData: {
    '0': {
        id: number;
        question: string;
        skippable: boolean;
        type: string;
        description: string;
        hasNext: boolean;
        nextId: string;
    };
    '1': {
        id: number;
        question: string;
        skippable: boolean;
        type: string;
        description: string;
        hasNext: boolean;
        nextId: string;
        answerDescription: {
            Y: string;
            N: string;
        };
    };
    '2': {
        id: number;
        question: string;
        skippable: boolean;
        type: string;
        options: {
            value: string;
            name: string;
        }[];
        description: string;
        hasNext: boolean;
        nextId: string;
    };
    '3': {
        id: number;
        question: string;
        skippable: boolean;
        type: string;
        options: {
            value: string;
            name: string;
        }[];
        description: string;
        hasNext: boolean;
    };
};
export { dummyData };
