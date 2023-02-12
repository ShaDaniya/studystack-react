import CardList from '../CardList/CardList';
import CardHeader from '../CardHeader/CardHeader';
import words from '../data/data.json';
import { useState, useEffect } from 'react'

export default function WordsTable() {

  const [wordsList, setWordsList] = useState(false)

useEffect(() => {
  setWordsList(words)
}, [])

  //функция для сохранения слова - пропсом передается в компонент CardList
  function editWord (id, english, transcription,russian,tags) {
    const copyWordsList = [...wordsList]
    const resultEditWordsList = copyWordsList.map(item => {
      if (item.id === id) {
        item.english = english
        item.transcription = transcription
        item.russian = russian
        item.tags = tags
        return item
      }
      return item
    })
    setWordsList(resultEditWordsList)
  }

  return (
        <div>
      <CardHeader/>
      {words.map((item) => {
      return <CardList {...item} key={item.id.toString()} editWord={editWord}/>})}
      </div>
  )
}
