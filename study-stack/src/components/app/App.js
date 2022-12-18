import style from'./app.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import words from '../data/data.json';
import CardList from '../CardList/CardList';
import CardHeader from '../CardHeader/CardHeader';
//import WordCard from '../WordCard/WordCard';
import CardSlider from '../CardSlider/CardSlider';

function App() {
  return (
    <div className={style.container} >
      <div className={style.header}>
      <Header />
      </div>
      <div className={style.main}>
        <div className={style.section}>
      <CardHeader/>
      {words.map((item) => {
      return <CardList {...item} key={item.id.toString()}/>})}
      {/* {words.map((item, index) => {
        return <WordCard english={item.english} transcription={item.transcription} russian={item.russian} key={index}/>
      })} */}
      </div>
      <div className={style.section}>
      <CardSlider />
      </div>
      </div>
      <div className={style.footer}>
      <Footer />
      </div>
    </div>
  );
}

export default App;
