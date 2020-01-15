import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import withQuery from '@storybook/addon-queryparams';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    withQuery,
  ],
  parameters: {
    query: {
      mock: true,
    },
  },
};

export const Text = () => <div>{document.search}</div>;

