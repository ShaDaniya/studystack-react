import style from './word_card.module.scss';
import React, { useState } from 'react'

export default function WordCard({english, transcription, russian}) {

  const [translation, setRussian] = useState(false)
  const handleChange = () => {
    setRussian(!translation)
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <div className={style.card}>
      <span className={style.card__word}>{english}</span>
      <span className={style.card__transcription}>{transcription}</span>
      <div className={style.btn__container}>
      <button className={style.card__button} onClick={handleChange}>{translation ? russian : "Click to flip"}</button>
      </div>
      </div>
      </div>
    </div>
  )
}
