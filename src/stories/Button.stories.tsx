import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary')
  const [isPrimary, setIsPrimary] = useState(false)

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true)
      setValue('Primary')
    }
  }
  return <Button primary={isPrimary} onClick={handleOnChange} label={value} />
  //return <Button primary={isPrimary} onClick={handleOnChange} label={value} />
}

export const PrimaryWithHook: Story = {
  args: {
    primary: false,
    label: 'Secondary',
  },
  render: () => <ButtonWithHooks />,
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: 'change story name',
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}
