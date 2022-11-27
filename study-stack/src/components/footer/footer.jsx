import style from './footer.module.scss'

import React from 'react'

export default function footer() {
  return (
    <div  className={style.footer}>
      <div className={style.footer__wrapper}>
      <a href="#"><img src='./assets/word_logo.webp' alt="logo" className={style.footer__logo}/></a>
      <span className={style.footer__text}>Created by Daniya Shagieva ⓒ 2022</span>
      </div>
    </div>
  )
}
