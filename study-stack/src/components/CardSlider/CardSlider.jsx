import { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import style from './cardSlider.module.scss';
import words from '../data/data.json';

export default function CardSlider({ english, transcription, russian }) {
  const [cardIndex, setCardIndex] = useState(1);

  console.log(words);

  function handleClickNext() {
    let nextCard = cardIndex;
    nextCard++;
    setCardIndex(nextCard);
  }

  function handleClickPrev() {
    let prevCard = cardIndex;
    prevCard = prevCard - 1;
    setCardIndex(prevCard);
  }

  return (
    <div className={style.container}>
      <button onClick={handleClickPrev} className={style.button}>
        <div className={style.arrow__prev}></div>
      </button>
      <WordCard
        english={words[cardIndex].english}
        transcription={words[cardIndex].transcription}
        russian={words[cardIndex].russian}
      />
      <button onClick={handleClickNext} className={style.button}>
        <div className={style.arrow__next}></div>
      </button>
    </div>
  );
}
