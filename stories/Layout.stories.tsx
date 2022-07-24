import React from 'react'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, screen, userEvent } from '@storybook/testing-library'

import { Layout } from '@/components'
import { LayoutProps } from '@/components/layout'

export default {
  title: 'Example/Templates/Layout',
  component: Layout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>

function Template(args: LayoutProps): ComponentStoryObj<typeof Layout> {
  return (<Layout {...args} />) as unknown as ComponentStoryObj<typeof Layout>
}

export const LoggedOut = Template.bind({})

export const LoggedIn: ComponentStoryObj<typeof Layout> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', { name: /Log in/i })
    await userEvent.click(loginButton)
  },
}
