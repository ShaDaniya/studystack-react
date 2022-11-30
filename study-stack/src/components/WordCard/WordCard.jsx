import style from './word_card.module.scss';
import './word_card.scss';
import React, { useState } from 'react'

export default function WordCard({english, transcription, russian}) {

  const [translation, setRussian] = useState(false)
  const handleChange = () => {
    setRussian(!translation)
  }

  let card__translation = "card__button";
  const [checked, setChecked] = useState(false)

  const handleChecked = () => {
    setChecked(!checked)
  }

  card__translation = checked ? "card__translation" : "card__button"

  const handleTranslation = () => {
    handleChecked()
    handleChange()
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <div className={style.card}>
      <span className={style.card__word}>{english}</span>
      <span className={style.card__transcription}>{transcription}</span>
      <div className={style.btn__container}>
      {/* <button className={[style.card__button, card__translation].join(' ')} onClick={handleTranslation}>{translation ? russian : "Click to flip"}</button> */}
      <button className={card__translation} onClick={handleTranslation}>{translation ? russian : "Click to flip"}</button>
      </div>
      </div>
      </div>
    </div>
  )
}
