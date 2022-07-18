import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SelectBox } from '@/components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/SelectBox',
  component: SelectBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectBox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectBox> = (args) => <SelectBox {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options: [
    { label: '한국어', value: 'ko' },
    { label: '영어', value: 'en' },
    { label: '일본어', value: 'ja' },
  ],
  default: 'ko',
}
