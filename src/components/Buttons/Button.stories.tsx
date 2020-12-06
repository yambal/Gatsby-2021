import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example',
  component: Button
} as Meta;

export const button: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} purpose="primary">child</Button>
    <Button {...args} purpose="primary" size="lg">child</Button>
    <Button {...args} purpose="primary" size="sm">child</Button>
  </div>
)