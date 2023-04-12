import React, { useState } from 'react';
import { ThumbDownIcon, ThumbUpIcon } from '../shared/Icons';

export interface ActionButtonProps {
  value: string;
  onSelect: Function;
}

export const ActionButton = ({ value, onSelect }: ActionButtonProps) => (
  <div className='button-wrapper centered mb'>
    <button
      onClick={() => onSelect('Y')}
      className={`button-yes ${value === 'Y' && 'selected'}`}
    >
      <ThumbUpIcon color={value === 'Y' ? '#ffffff' : '#81C216'} />
      &nbsp;&nbsp;Yes
    </button>
    <button
      onClick={() => onSelect('N')}
      className={`button-no ${value === 'N' && 'selected'}`}
    >
      <ThumbDownIcon color={value === 'N' ? '#ffffff' : '#E91C1C'} />
      &nbsp;&nbsp;No
    </button>
  </div>
);
