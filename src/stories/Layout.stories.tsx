import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'

import { Layout } from '@/components'

export default {
  title: 'Example/Templates/Layout',
  component: Layout,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const loginButton = await canvas.getByRole('button', { name: /Log in/i })
  await userEvent.click(loginButton)
}