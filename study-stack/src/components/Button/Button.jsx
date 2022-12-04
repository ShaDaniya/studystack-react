import style from './button.module.scss'

import React from 'react'

export default function Button(props) {
  return (
    <div className={style.button}>
        <button className={style.button__text}>{props.text}</button>
    </div>
  )
}
