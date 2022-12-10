import { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import style from './cardSlider.module.scss';
import words from '../data/data.json';

export default function CardSlider({
  english,
  transcription,
  russian,
  ...props
}) {
  const [cardIndex, setCardIndex] = useState(0);

  const handleClickNext = () => {
    if (cardIndex === words.length - 1) {
      setCardIndex(words.length - (words.length - 1));
    } else {
      setCardIndex(cardIndex + 1);
    }
  };

  const handleClickPrevious = () => {
    if (cardIndex === 0) {
      setCardIndex(words.length - 1);
    } else {
      setCardIndex(cardIndex - 1);
    }
  };

  return (
    <div className={style.container}>
      <button onClick={handleClickPrevious} className={style.button}>
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
