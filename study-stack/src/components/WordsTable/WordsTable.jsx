import CardList from '../CardList/CardList';
import CardHeader from '../CardHeader/CardHeader';
import words from '../data/data.json';

export default function WordsTable() {
  return (
        <div>
      <CardHeader/>
      {words.map((item) => {
      return <CardList {...item} key={item.id.toString()}/>})}
      </div>
  )
}

export default inject(['wordsStore'])(observer(WordsTable));
