import React from 'react';
import { storiesOf } from '@storybook/react';
import { ActionCardWidget } from '../index';

const stories = storiesOf('Test', module);

stories.add('App', () => {
  return (
    <div style={{ width: '390px' }}>
      <ActionCardWidget />
    </div>
  );
});
