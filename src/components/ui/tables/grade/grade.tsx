import { useState } from 'react'

import { Star } from '../../../../images/svg/icons/star'
import { StarOutlined } from '../../../../images/svg/icons/starOutlined'

import s from './grade.module.scss'

export const Grade = () => {
  const [starState, setStarState] = useState(Array(5).fill(true))

  const handleStarClick = (index: number) => {
    const newStarState = [...starState]

    // Переключаем состояние нажатой звезды
    newStarState[index] = !newStarState[index]

    // Устанавливаем состояние для всех звезд справа
    for (let i = index + 1; i < starState.length; i++) {
      newStarState[i] = false
    }

    // Устанавливаем состояние для всех звезд слева
    for (let i = 0; i < index; i++) {
      newStarState[i] = true
    }

    setStarState(newStarState)
  }

  return (
    <div className={s.container}>
      <div className={s.values_block}>
        {starState.map((isFilled, index) =>
          isFilled ? (
            <Star key={index} onClick={() => handleStarClick(index)} />
          ) : (
            <StarOutlined key={index} onClick={() => handleStarClick(index)} />
          )
        )}
      </div>
    </div>
  )
}
