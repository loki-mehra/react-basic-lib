import React from 'react';
import { storiesOf } from '@storybook/react';
import { ActionCardWidget } from '../components/ActionCardWidget';

const stories = storiesOf('Test', module);

stories.add('App', () => {
  return <ActionCardWidget />;
});
