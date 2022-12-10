import style from'./app.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import words from '../data/data.json';
import CardList from '../CardList/CardList';
import CardHeader from '../CardHeader/CardHeader';
import WordCard from '../WordCard/WordCard';
import CardSlider from '../CardSlider/CardSlider';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <CardHeader/>
      {words.map((item, index) => {
      return <CardList english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} key={index}/>})}
      {words.map((item, index) => {
        return <WordCard english={item.english} transcription={item.transcription} russian={item.russian} key={index}/>
      })}
      <CardSlider />
      <Footer />
    </div>
  );
}

export default App;
