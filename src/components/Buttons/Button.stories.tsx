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
    <Button {...args} purpose="primary" buttonSize="lg">child</Button>
    <Button {...args} purpose="primary" buttonSize="sm">child</Button>
  </div>
)