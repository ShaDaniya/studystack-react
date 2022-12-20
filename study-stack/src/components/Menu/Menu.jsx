import style from './menu.module.scss'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <header className={style.header}>
    <div className={style.header__wrapper}>
    <Link to="."><img src='./assets/word_logo.webp' alt="logo" className={style.header__logo}/></Link>
    <ul className={style.header__nav}>
      <li><Link to=".">Home</Link></li>
      <li><Link to="words">Words</Link></li>
      <li><Link to="flashcards">Flashcards</Link></li>
    </ul>
    </div>
  </header>
  </div>
  )
}
