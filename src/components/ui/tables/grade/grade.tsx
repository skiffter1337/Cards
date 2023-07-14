import { FC, useState } from 'react'

import { Star } from '../../../../images/svg/icons/star'
import { StarOutlined } from '../../../../images/svg/icons/starOutlined'

import s from './grade.module.scss'

type GradePropsType = {
  initialGrade: number
}

export const Grade: FC<GradePropsType> = ({ initialGrade }) => {
  const [starState, setStarState] = useState<any>(initialGrade)

  const handleStarClick = (index: number) => {
    const newStarState = [...starState]

    newStarState[index] = !newStarState[index]

    for (let i = index + 1; i < starState.length; i++) {
      newStarState[i] = false
    }

    for (let i = 0; i < index; i++) {
      newStarState[i] = true
    }

    setStarState(newStarState)
  }

  return (
    <div className={s.container}>
      {[1, 2, 3, 4, 5].map((isFilled, index) => {
        if (isFilled < initialGrade) {
          return <Star key={index} onClick={() => handleStarClick(index)} />
        } else {
          return <StarOutlined key={index} onClick={() => handleStarClick(index)} />
        }
      })}
    </div>
  )
}
