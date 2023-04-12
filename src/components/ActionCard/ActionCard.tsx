import React, { useEffect, useState } from 'react';
import { IdeaIcon, CloseIcon } from '../shared/Icons';
import '../shared/styles.css';
import { ActionButton } from './ActionButton';
import { ActionSelect } from './ActionSelect';

export interface ActionCardProps {
  currentData: {
    id: number;
  };
  onClose: Function;
  onNext: Function;
}

export const ActionCard = ({
  currentData,
  onClose,
  onNext,
}: ActionCardProps) => {
  const [cardData, setCardData] = useState<any>({});
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setCardData({ ...currentData });
    setSelected('');
  }, [currentData.id]);

  const handleNextClick = () => {
    if (!cardData.skippable && cardData.type != 'text' && !selected) {
      return;
    }

    if (cardData.hasNext) {
      onNext(cardData.nextId);
    } else {
      onNext(null);
    }
  };

  const handleValueSelect = (newValue: string) => {
    setSelected(newValue);
  };

  const getButtonText = () => {
    if (cardData.skippable && !selected) {
      return 'Skip';
    }
    if (cardData.hasNext) {
      return 'Next';
    }
    if (cardData.type === 'text') {
      return 'Close';
    }
    return 'Save & Close';
  };

  const getButtonClass = () => {
    if (cardData.skippable && !selected) {
      return 'link';
    }
    if (cardData.type === 'text' && !cardData.hasNext) {
      return 'link';
    }
    return '';
  };

  const getDescriptionText = () => {
    if (selected && cardData.answerDescription) {
      return cardData.answerDescription[selected];
    }

    return cardData.description || <span>&nbsp;</span>;
  };

  const renderFormType = () => {
    const type = cardData.type;

    if (type === 'yes_no') {
      return <ActionButton value={selected} onSelect={handleValueSelect} />;
    }
    if (type === 'select') {
      return (
        <ActionSelect
          value={selected}
          onSelect={handleValueSelect}
          options={cardData.options}
        />
      );
    }
    return <></>;
  };

  return (
    <div className='action-box-card question-card'>
      <div className='close' onClick={(e) => onClose(e)}>
        <CloseIcon />
      </div>
      <div className='centered'>
        <IdeaIcon />
      </div>
      <h2>{cardData.question}</h2>
      {renderFormType()}
      <hr className='divider' />
      <div className='text-content scrollable'>{getDescriptionText()}</div>
      <div className='button-wrapper centered'>
        <button className={getButtonClass()} onClick={handleNextClick}>
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};
