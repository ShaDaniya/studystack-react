import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from'./app.module.scss';
import MainLayout from '../../MainLayout/MainLayout';
import CardList from '../CardList/CardList';
import CardHeader from '../CardHeader/CardHeader';
import CardSlider from '../CardSlider/CardSlider';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import words from '../data/data.json';


function App() {
  return (
    <BrowserRouter>
    <div className={style.container} >
      <Routes>
      <Route path="/" element={<div className={style.header}>
      <MainLayout />
      </div>}>
      <Route index element={<div className={style.main}><Main /></div>}/>
      <Route path="words" element={<div className={style.main}>
        <div className={style.section}>
      <CardHeader/>
      {words.map((item) => {
      return <CardList {...item} key={item.id.toString()}/>})}
      </div></div>}/>
      <Route path="flashcards" element={<div className={style.section}>
      <CardSlider />
      </div>}/>
      <Route path="*" element={<NotFound />}/>
      </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
