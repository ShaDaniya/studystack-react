import style from './button.module.scss'

import React from 'react'

export default function Button(props) {
  return (
    <div className={style.button}>
        <span className={style.button__text}>{props.text}</span>
    </div>
  )
}
