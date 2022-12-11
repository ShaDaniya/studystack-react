import style from './word_card.module.scss';
import './word_card.scss';
import React from 'react';

export default function WordCard({ english, transcription, russian, handleChange, translation, handleAnswer, answer }) {
  //useState для перевода слова на карточке
  // const [translation, setRussian] = useState(false);
  // const handleChange = () => {
  //   setRussian(!translation);
  // };

  // !!!! ТУТ ВОПРОС: первоначально в компоненте карточки на кнопке у меня висел обработчик - результирующая функция для двух useState, стейт для первода слова и стейт для изменения стилей кнопки при появлении перевода. и вот как прокинуть пропсом в компонент слайдера такую функицю на два стейта, я не поняла, поэтому сделала пропсом только стейт для перевода в компонент слайдера, а стили теперь не меняются. кода для них оставила ниже, потому что надеюсь разобраться, как мне кинуть в слайдер и то, и другое

  //useState для стилей кнопки перевода карточки
  let card__translation = 'card__button';
  // const [checked, setChecked] = useState(false);

  // const handleCheckedStyle = () => {
  //   setChecked(!checked);
  // };

  // card__translation = checked ? 'card__translation' : 'card__button';

  //общая функция обработчик на кнопку для перевода карточки
  // const handleTranslation = () => {
  //   handleCheckedStyle();
  //   handleChange();
  // };

  //для переворачивания карточки с переводом
  // const [answer, setAnswer] = useState(false);
  // const handleAnswer = () => {
  //   setAnswer(!answer);
  // };

  //для стилей question/answer
  // let card__text = 'question__text';
  // const [answered, setAnswered] = useState(false);

  // const handleAnsweredStyle = () => {
  //   setAnswered(!answered);
  // };

  //card__text = answered ? 'answer__text' : 'question__text';

  //общая функция для верхней строчки question/answer
  // const handleAnsWords = () => {
  //   handleAnswer();
  //   handleAnsweredStyle();
  // };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.card}>
          <span onClick={handleAnswer} className={style.question__text}>
            {answer ? 'Answer' : 'Question'}
          </span>
          <span className={style.card__word}>{answer ? russian : english}</span>
          <span className={style.card__transcription}>
            {answer ? '' : transcription}
          </span>
          <div className={style.btn__container}>
            <button className={card__translation} onClick={handleChange} >
              {translation ? russian : 'Click to flip'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
