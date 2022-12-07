import { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import './cardSlider.module.scss';

export default function CardSlider({words, ...props}) {

    const [cardIndex, setCardIndex] = useState(0)

  return (
    <div>
        <button>Left</button>
        <WordCard />
        <button>Right</button>
    </div>
  )
}
