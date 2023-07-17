import { FC, useState, useEffect, memo } from 'react'

import { Star } from '../../../images/svg/icons/star'
import { StarOutlined } from '../../../images/svg/icons/starOutlined'

import s from './grade.module.scss'

type GradePropsType = {
  initialGrade: 1 | 2 | 3 | 4 | 5
}

export const Grade: FC<GradePropsType> = memo(({ initialGrade }) => {
  const [starState, setStarState] = useState<boolean[]>([])

  useEffect(() => {
    const stars = Array(5).fill(false)

    for (let i = 0; i < initialGrade; i++) {
      stars[i] = true
    }
    setStarState(stars)
  }, [initialGrade])

  const handleStarClick = (index: number) => {
    // @ts-ignore
    const newStarState = starState.map((value, i) => i <= index)

    setStarState(newStarState)
  }

  return (
    <div className={s.container}>
      {starState.map((isFilled, index) => {
        if (isFilled) {
          return <Star key={index} onClick={() => handleStarClick(index)} />
        } else {
          return <StarOutlined key={index} onClick={() => handleStarClick(index)} />
        }
      })}
    </div>
  )
})
