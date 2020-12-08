import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example',
  component: Button
} as Meta;

export const bootstrap_button: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} purpose="primary">Primary</Button>&nbsp;
    <Button {...args} purpose="secondary">Secondary</Button>&nbsp;
    <Button {...args} purpose="success">Success</Button>&nbsp;
    <Button {...args} purpose="danger">Danger</Button>&nbsp;
    <Button {...args} purpose="warning">Warning</Button>&nbsp;
    <Button {...args} purpose="info">Info</Button>&nbsp;
    <Button {...args} purpose="light">Light</Button>&nbsp;
    <Button {...args} purpose="dark">Dark</Button>&nbsp;
    <Button {...args} purpose="link">Link</Button>&nbsp;
  </div>
)