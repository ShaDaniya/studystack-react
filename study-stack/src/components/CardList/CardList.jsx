import React from 'react'
import style from './card_list.module.scss';

export default function Card_list({ english, transcription, russian, tags}) {
  return (
    <div className={style.container}>
      <div>{english}</div>
      <div>{transcription}</div>
      <div>{russian}</div>
      <div>{tags}</div>
    </div>
  )
}