import { FC } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import { Typography } from '../typography'

import s from './slider.module.scss'

type SliderPropsType = {
  min: number
  max: number
  step: number
  sliderValues: [number, number]
  onValueCommit: (values: [number, number]) => void
  changeSliderValues: (values: [number, number]) => void
  label?: string
}

export const Slider: FC<SliderPropsType> = ({
  min,
  max,
  step,
  sliderValues,
  onValueCommit,
  changeSliderValues,
  label,
}) => {
  const changeSliderValuesHandler = (values: [number, number]) => {
    changeSliderValues(values)
  }

  return (
    <>
      <Typography variant={'body2'} className={s.label}>
        {label}
      </Typography>
      <div className={s.container}>
        <Typography variant={'body1'} className={s.values}>
          {sliderValues[0]}
        </Typography>
        <SliderRadix.Root
          minStepsBetweenThumbs={1}
          className={s.root}
          defaultValue={[min, max]}
          min={min}
          max={max}
          step={step}
          onValueCommit={onValueCommit}
          onValueChange={changeSliderValuesHandler}
        >
          <SliderRadix.Track className={s.track}>
            <SliderRadix.Range className={s.range} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={s.thumb} aria-label="Slider">
            <div className={s.thumb_inner} />
          </SliderRadix.Thumb>
          <SliderRadix.Thumb className={s.thumb} aria-label="Slider">
            <div className={s.thumb_inner} />
          </SliderRadix.Thumb>
        </SliderRadix.Root>
        <Typography variant={'body1'} className={s.values}>
          {sliderValues[1]}
        </Typography>
      </div>
    </>
  )
}
