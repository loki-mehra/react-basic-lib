import React from 'react';
import { CaretDownIcon } from '../shared/Icons';

export interface ActionSelectProps {
  options: Array<object>;
  onSelect: Function;
  value: string;
  placeholder?: string;
}

export const ActionSelect = ({
  options,
  value,
  placeholder,
  onSelect,
}: ActionSelectProps) => {
  return (
    <div className='centered mb'>
      <div className='select-wrapper'>
        <select
          onChange={(e) => onSelect(e.target.value)}
          className={`${value === '' && 'empty'}`}
        >
          <option value='' className='muted-option'>
            {placeholder || 'Please select...'}
          </option>
          {options.map((option: any) => (
            <option value={option.value} selected={option.value === value}>
              {option.name}
            </option>
          ))}
        </select>
        <div className='caret'>
          <CaretDownIcon />
        </div>
      </div>
    </div>
  );
};
