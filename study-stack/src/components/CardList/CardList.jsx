import React, { useState } from 'react'
import { useEffect, useContext } from 'react';
import style from './card_list.module.scss';
import './card_list.scss';
import EditServices from '../../Services/EditServices'
import { WordsContext } from '../../contexts/WordsContext'

export default function Card_list({ id, english, transcription, russian, tags, editWord}) {

  //функция для открывания режима редактирования
  const [editMode, setEditMode] = useState("")
  const changeWord = () => {
    setEditMode(!editMode)
  }

  const [initialValue, setInitialValue] = useState({})

  useEffect(() => {
    setInitialValue({
      englishWord: english,
      transcriptionWord: transcription,
      russianWord: russian,
      tagsWord: tags
    })
  }, [id, english, transcription, russian, tags, editWord])

  function getValue(e) {
    e.preventDefault()
    const copyInitialValue = {...initialValue }
    copyInitialValue[e.target.name] = e.target.value
    setInitialValue(copyInitialValue)
  }

  function validate(value) {
    if (value !== '') {
      return true
    }
    return false
  }

  const validateFlag = validate(initialValue.englishWord) && validate(initialValue.transcriptionWord) && validate(initialValue.russianWord) && validate(initialValue.tagsWord)

  const validateEnglishWord = validate(initialValue.englishWord)
  const validateTranscriptionWord = validate(initialValue.transcriptionWord)
  const validateRussianWord = validate(initialValue.russianWord)
  const validateTagsWord = validate(initialValue.tagsWord)


  //функция для сохранения слова
  function saveWord() {
    editWord(id, initialValue.englishWord, initialValue.transcriptionWord, initialValue.russianWord, initialValue.tagsWord)
  }

  const { valueContext, setValueContext} = useContext(WordsContext)


//тут должна быть функция для изменения, но она работает, как функиця для удаления
  async function handleEdit(id) {
    EditServices.editWords(id)
    const copyWords = [...valueContext]
    const copyWordsEdit = copyWords.filter(item => item.id !== id)
    setValueContext(copyWordsEdit)
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
        <input type="text" placeholder='Word' className={validateEnglishWord ? 'container__input' : 'container__input-empty'} onChange={getValue} name="englishWord" value={initialValue.englishWord}/>
        </div>
      <div>
        <input type="text" placeholder='Transcription' className={validateTranscriptionWord ? 'container__input' : 'container__input-empty'} onChange={getValue} name="transcriptionWord" value={initialValue.transcriptionWord}/>
      </div>
      <div>
        <input type="text" placeholder='Russian' className={validateRussianWord ? 'container__input' : 'container__input-empty'} onChange={getValue} name="russianWord" value={initialValue.russianWord}/>
        </div>
      <div>
        <input type="text" placeholder='Tags' className={validateTagsWord ? 'container__input' : 'container__input-empty'} onChange={getValue} name="tagsWord" value={initialValue.tagsWord}/>
        </div>
        {validateFlag && <div className={style.button}>
          <button className={style.button}
          onClick={() => {handleEdit(id)}}><img src='./assets/save-icon.svg' alt='save_icon' className={style.icon}></img></button>
        </div>}
        <div className={style.button}>
          <button className={style.button} onClick={changeWord}><img src='./assets/cancel-icon.svg' alt='cancel_icon' className={style.icon}></img></button>
        </div>
      </div> : ""}
    </div>
    </>
  )
}