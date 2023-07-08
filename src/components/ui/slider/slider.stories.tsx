import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => {
    const [sliderValues, setSliderValues] = useState<[number, number]>([1, 100])

    const changeSliderValues = (values: [number, number]) => setSliderValues(values)
    const showSliderValues = (values: [number, number]) => {
      console.log(`Slider values are: ${values}`)
    }

    return (
      <>
        <Slider
          min={1}
          max={100}
          step={1}
          sliderValues={sliderValues}
          onValueCommit={showSliderValues}
          changeSliderValues={changeSliderValues}
        />
      </>
    )
  },
  args: {},
}
