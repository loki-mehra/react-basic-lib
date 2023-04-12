import React, { useState } from 'react';
import Modal from 'react-modal';
import { ActionCard } from '../ActionCard';
import { IdeaIcon } from '../shared/Icons';
import '../shared/styles.css';

import { dummyData } from '../shared/dummyData';

export interface ActionCardWidgetProps {
  classNames?: string;
}

export const ActionCardWidget = ({ classNames }: ActionCardWidgetProps) => {
  const [isOpen, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState<any>(null);

  const fetchQuestion = (id: string) => {
    if (!id) {
      setOpen(false);
    }

    // API call to fetch
    setCurrentData(dummyData[id]);
  };

  useState(() => {
    fetchQuestion('0');
  }, []);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleNextClick = (nextId: string) => {
    fetchQuestion(nextId);
  };

  return (
    <div>
      {currentData ? (
        <>
          <div className={`action-box-card widget-card ${classNames}`}>
            <IdeaIcon />
            <h4>{currentData.question}</h4>
            <button className='link' onClick={handleOpenModal}>
              Read more
            </button>
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            contentLabel='Action-Box Modal'
            overlayClassName='action-box-modal-overlay'
            className='action-box-modal-content'
          >
            <ActionCard
              onClose={handleCloseModal}
              currentData={currentData}
              onNext={handleNextClick}
            />
          </Modal>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
