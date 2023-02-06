import CardList from '../CardList/CardList';
import CardHeader from '../CardHeader/CardHeader';
//import words from '../data/data.json';
import { useState, useEffect, useContext } from 'react'
import { WordsContext } from '../../contexts/WordsContext'

export default function WordsTable() {

  const { valueContext, setValueContext} = useContext(WordsContext)

  const [wordsList, setWordsList] = useState(false)

  useEffect(() => {
    setWordsList(valueContext)
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
    // тут должен быть лоадер и тогда добавить состояние лоадинг в контекст и это тоже передать в велью
        <div>
      <CardHeader/>
      {valueContext?.map((item) => {
      return <CardList {...item} key={item.id.toString()} editWord={editWord}/>})}
      </div>
  )
}
