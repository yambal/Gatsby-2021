import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Sample, wrapperProps } from './Sample';

export default {
  title: 'Example',
  component: Sample,
} as Meta;

export const sample: Story<wrapperProps> = (args) => (
  <Sample {...args}>child</Sample>
)

/*
export const sample = sampleStory.bind({});

sample.args = {
  mt: '1rem'
}
*/
