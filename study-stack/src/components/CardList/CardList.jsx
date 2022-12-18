import React, { useState } from 'react'
import style from './card_list.module.scss';

export default function Card_list({ english, transcription, russian, tags}) {

  //функция для открывания режима редактирования
  const [editMode, setEditMode] = useState("")
  const changeWord = () => {
    setEditMode(!editMode)
  }

  return (<>
    <div className={style.container}>
      <div className={style.item}>{english}</div>
      <div className={style.item}>{transcription}</div>
      <div className={style.item}>{russian}</div>
      <div className={style.item}>{tags}</div>
      <div className={style.button}>
      <button className={style.button} onClick=
        {changeWord}><img src='./assets/edit-icon.svg' alt='edit_icon' className={style.icon}></img></button>
      </div>
      {editMode ? <div className={style.save__container}>
      <div>
        {/* <label htmlFor="word">Word</label> */}
        <input type="text" placeholder='Word' className={style.container__input}/>
        </div>
      <div>
        {/* <label htmlFor="transcription">Transcription</label> */}
        <input type="text" placeholder='Transcription' className={style.container__input}/>
      </div>
      <div>
        {/* <label htmlFor="translation">Russian</label> */}
        <input type="text" placeholder='Russian' className={style.container__input}/>
        </div>
      <div>
      {/* <label htmlFor="tags">Tags</label> */}
        <input type="text" placeholder='Tags' className={style.container__input}/>
        </div>
        <div className={style.button}>
          <button className={style.button}><img src='./assets/save-icon.svg' alt='save_icon' className={style.icon}></img></button>
        </div>
        <div className={style.button}>
          <button className={style.button} onClick={changeWord}><img src='./assets/cancel-icon.svg' alt='cancel_icon' className={style.icon}></img></button>
        </div>
      </div> : ""}
    </div>
    </>
  )
}