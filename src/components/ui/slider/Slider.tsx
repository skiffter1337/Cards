import { FC, useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import { Typography } from '../typography'

import s from './slider.module.scss'

type SliderPropsType = {
  min: number
  max: number
  step: number
}
export const Slider: FC<SliderPropsType> = ({ min, max, step }) => {
  const [sliderValues, setSliderValues] = useState<[number, number]>([min, max])

  const changeSliderValuesHandler = (values: [number, number]) => {
    setSliderValues(values)
  }

  return (
    <div className={s.slider_container}>
      <div>
        <Typography variant={'body1'} className={s.slider_values}>
          {sliderValues[0]}
        </Typography>
      </div>
      <SliderRadix.Root
        className={s.slider_root}
        defaultValue={sliderValues}
        min={min}
        max={max}
        step={step}
        onValueChange={changeSliderValuesHandler}
      >
        <SliderRadix.Track className={s.slider_track}>
          <SliderRadix.Range className={s.slider_range} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.slider_thumb} aria-label="Volume">
          <div className={s.thumb_inner} />
        </SliderRadix.Thumb>
        <SliderRadix.Thumb className={s.slider_thumb} aria-label="Volume">
          <div className={s.thumb_inner} />
        </SliderRadix.Thumb>
      </SliderRadix.Root>
      <div>
        <Typography variant={'body1'} className={s.slider_values}>
          {sliderValues[1]}
        </Typography>
      </div>
    </div>
  )
}
