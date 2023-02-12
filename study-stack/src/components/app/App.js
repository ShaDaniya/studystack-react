import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from'./app.module.scss';
import MainLayout from '../../MainLayout/MainLayout';
import CardSlider from '../CardSlider/CardSlider';
import Main from '../Main/Main';
import WordsTable from '../WordsTable/WordsTable';
import NotFound from '../NotFound/NotFound';
import { observer, inject } from 'mobx-react';
import { useEffect } from 'react';

function App({ wordsStore }) {

  useEffect(() => {
    wordsStore.loadData()
  }, [])

  return (
    <BrowserRouter>
    <div className={style.container} >
      <Routes>
      <Route path="/" element={<div className={style.header}>
      <MainLayout />
      </div>}>
      <Route index element={<div className={style.main}><Main /></div>}/>
      <Route path="words" element={<div className={style.main}>
        <WordsTable /></div>}/>
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

export default inject(['wordsStore'])(observer(App));