import style from './header.module.scss'

import React from 'react'

export default function header() {
  return (
    <div>
      <header className={style.header}>
        <div className={style.header__wrapper}>
        <a href="#"><img src='./assets/word_logo.webp' alt="logo" className={style.header__logo}/></a>
        <ul className={style.header__nav}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Flashcards</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#" className={style.header__button}>Add word</a></li>
        </ul>
        </div>
      </header>
    </div>
  )
}
