import style from './cardSlider.module.scss';
import { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import words from '../data/data.json';

export default function CardSlider({
  english,
  transcription,
  russian, ...props
}) {

  const [translation, setRussian] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleChange = () => {
    setRussian(false);
    setAnswer(false);
    handleCheckedStyle();
  };

  const handleAnswer = () => {
    setAnswer(false);
    setRussian(false)
    handleAnsweredStyle();
  };

  const handleClickNext = () => {
    if (cardIndex === words.length - 1) {
      setCardIndex(words.length - (words.length - 1));
    } else {
      setCardIndex(cardIndex + 1)
    }
    setRussian(false)
    setAnswer(false)
    setChecked(false)
    setAnswered(false)
  };

  const handleClickPrevious = () => {
    if (cardIndex === 0) {
      setCardIndex(words.length - 1)
    } else {
      setCardIndex(cardIndex - 1)
    }
    setRussian(false)
    setAnswer(false)
    setChecked(false)
    setAnswered(false)
  };

  const handleCheckedStyle = () => {
    setChecked(!checked);
  };

  const handleAnsweredStyle = () => {
    setAnswered(!answered);
  };

  return (
    <div className={style.container}>
      <button onClick={handleClickPrevious} className={style.button}>
        <div className={style.arrow__prev}></div>
      </button>
      <WordCard
        english={words[cardIndex].english}
        transcription={words[cardIndex].transcription}
        russian={words[cardIndex].russian} handleChange={handleChange} translation={translation} handleAnswer={handleAnswer} answer={answer} checked={checked} answered={answered}
      />
      <button onClick={handleClickNext} className={style.button}>
        <div className={style.arrow__next}></div>
      </button>
    </div>
  );
}
