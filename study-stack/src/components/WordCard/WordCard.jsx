import style from './word_card.module.scss';
import './word_card.scss';
import React, { useState } from 'react';

export default function WordCard({english, transcription, russian}) {

  //useState для перевода слова на карточке
  const [translation, setRussian] = useState(false)
  const handleChange = () => {
    setRussian(!translation)
  }

  //useState для стилей кнопки перевода карточки
  let card__translation = "card__button";
  const [checked, setChecked] = useState(false)

  const handleCheckedStyle = () => {
    setChecked(!checked)
  }

  card__translation = checked ? "card__translation" : "card__button"

  //общая функция обработчик на кнопку для перевода карточки
  const handleTranslation = () => {
    handleCheckedStyle()
    handleChange()
  }

  //для переворачивания карточки с переводом
  const [answer, setAnswer] = useState(false)
  const handleAnswer = () => {
    setAnswer(!answer)
  }

  //для стилей question/answer
  let card__text = "question__text"
  const [answered, setAnswered] = useState(false)

  const handleAnsweredStyle = () => {
    setAnswered(!answered)
  }

  card__text = answered ? "answer__text" : "question__text"

  //общая функция для верхней строчки question/answer
  const handleAnsWords = () => {
    handleAnswer()
    handleAnsweredStyle()
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <div className={style.card}>
      <span onClick={handleAnsWords} className={card__text}>{answer ? "Answer" : "Question"}</span>
      <span className={style.card__word}>{answer ? russian : english}</span>
      <span className={style.card__transcription}>{answer ? "" : transcription}</span>
      <div className={style.btn__container}>
      <button className={card__translation} onClick={handleTranslation}>{translation ? russian : "Click to flip"}</button>
      </div>
      </div>
      </div>
    </div>
  )
}
