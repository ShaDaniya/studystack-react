import React, { useState } from 'react'
import style from './card_list.module.scss';
import Button from '../Button/Button';

export default function Card_list({ english, transcription, russian, tags}) {

  //функция для открывания режима редактиврования
  const [editMode, setEditMode] = useState("")
  const changeWord = () => {
    setEditMode(!editMode)
  }

  //функция для сохранения изменений
  // const [saveWord, setSaveWord] = useState()
  // const saveChanges = () => {
  //   setSaveWord(!saveWord)
  // }

  return (<>
    <div className={style.container}>
      <div className={style.item}>{english}</div>
      <div className={style.item}>{transcription}</div>
      <div className={style.item}>{russian}</div>
      <div className={style.item}>{tags}</div>
      <div className={style.button}>
      <button className={style.button} onClick=
        {changeWord}><span className={style.button__text}>Edit</span></button>
      </div>
      {editMode ? <div className={style.save__container}>
      <div>
        <label htmlFor="word">Word</label>
        <input type="text" />
        </div>
      <div>
        <label htmlFor="transcription">Transcription</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="translation">Translation</label>
        <input type="text" />
        </div>
      <div>
      <label htmlFor="tags">Tags</label>
        <input type="text" />
        </div>
      </div> : ""}
       {/* <div>
        <label htmlFor="word">{editMode ? "Word" : ""}</label>
        {editMode ? <input type="text" /> : ""}
        </div>
      <div>
        <label htmlFor="transcription">{editMode ? "Transcription" : ""}</label>
        {editMode ? <input type="text" /> : ""}</div>
      <div>
        <label htmlFor="translation">{editMode ? "Translation" : ""}</label>
        {editMode ? <input type="text" /> : ""}
        </div>
      <div>
      <label htmlFor="tags">{editMode ? "Tags" : ""}</label>
        {editMode ? <input type="text" /> : ""}
        </div> */}
    </div>
    </>
  )
}