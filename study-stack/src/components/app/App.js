import style from'./app.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import words from '../data/data.json';
import CardList from '../CardList/CardList';

function App() {
  return (
    <div className={style.App}>
      <Header />
      {words.map((item, index) => {
      return <CardList english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} key={index}/>})}
      <Footer />
    </div>
  );
}

export default App;
