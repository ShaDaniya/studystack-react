import React from 'react'
import style from './card_list.module.scss';
import Button from '../Button/Button';

export default function Card_list({ english, transcription, russian, tags}) {
  return (
    <div className={style.container}>
      <div className={style.item}>{english}</div>
      <div className={style.item}>{transcription}</div>
      <div className={style.item}>{russian}</div>
      <div className={style.item}>{tags}</div>
      <div className={style.button}>
        <Button text="Edit"/>
        <Button text="Delete"/>
      </div>
    </div>
  )
}