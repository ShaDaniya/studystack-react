import style from './word_card.module.scss';
import './word_card.scss';
import { useEffect, useRef } from 'react'; 

export default function WordCard({ english, transcription, russian, handleChange, translation, handleAnswer, answer, checked, answered }) {
 
  
    const buttonRef = useRef(null);
    useEffect(() => {
      buttonRef.current.focus()
    }, [english])
  


  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.card}>
          <span onClick={handleAnswer} className={answered ? 'answer__text' : 'question__text'}>
            {answer ? 'Answer' : 'Question'}
          </span>
          <span className={style.card__word}>{answer ? russian : english}</span>
          <span className={style.card__transcription}>
            {answer ? '' : transcription}
          </span>
          <div className={style.btn__container}>
            <button ref={buttonRef} className={checked ? 'card__translation' : 'card__button'} onClick={handleChange} >
              {translation ? russian : 'Click to flip'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
