import style from './cardSlider.module.scss';
import { useState, useContext, useEffect } from 'react';
import WordCard from '../WordCard/WordCard';
//import words from '../data/data.json';
import { WordsContext } from '../../contexts/WordsContext'

export default function CardSlider({
  english, ...props
}) {

  const { valueContext, setValueContext} = useContext(WordsContext)

  const [translation, setRussian] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [learntWords, setLearntWords] = useState(false)
  const [learntWordsIndex, setLearntWordsIndex] = useState([])
  const [wordsQuantity, setWordsQuantity] = useState(0);

  const handleChange = () => {
    setRussian(!translation);
    setAnswer(false);
    handleCount(valueContext[cardIndex].id)
    handleCheckedStyle();
  };

  const handleAnswer = () => {
    setAnswer(!answer);
    setRussian(false)
    handleAnsweredStyle();
  };

  const handleClickNext = () => {
    if (cardIndex === valueContext.length - 1) {
      setCardIndex(valueContext.length - (valueContext.length - 1));
    } else {
      setCardIndex(cardIndex + 1)
    }
    setRussian(false)
    setAnswer(false)
  };

  const handleClickPrevious = () => {
    if (cardIndex === 0) {
      setCardIndex(valueContext.length - 1)
    } else {
      setCardIndex(cardIndex - 1)
    }
    setRussian(false)
    setAnswer(false)
  };

  const handleCheckedStyle = () => {
    setChecked(!checked);
  };

  const handleAnsweredStyle = () => {
    setAnswered(!answered);
  };

//посчитать выученные слова
const handleCount = (id) => {
  const wordsArr = [...learntWordsIndex]
  wordsArr.push(id)
  let resultArr = []

  wordsArr.forEach((el) => {
    if (!resultArr.includes(el)) {
      resultArr.push(el)
    }
  })

  setLearntWordsIndex(resultArr)
  setWordsQuantity(resultArr.length)

  //проверить, все ли слова выучили
  if (resultArr.length === valueContext.length) {
    setLearntWords(true)
  }
}

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <button onClick={handleClickPrevious} className={style.button}>
        <div className={style.arrow__prev}></div>
      </button>
      <WordCard
        english={valueContext[cardIndex].english}
        transcription={valueContext[cardIndex].transcription}
        russian={valueContext[cardIndex].russian} handleChange={handleChange} translation={translation} handleAnswer={handleAnswer} answer={answer} checked={checked} answered={answered} 
      />
      <button onClick={handleClickNext} className={style.button}>
        <div className={style.arrow__next}></div>
      </button>
      </div>
      {learntWords
      ? <span className={style.words_counter}>You've learnt all the words!</span>
      : <span className={style.words_counter}>You've learnt: {wordsQuantity} / {valueContext.length}</span>}
    </div>
  );
}
