import style from './footer.module.scss'
import { Link } from 'react-router-dom'

export default function Footer() {

  const today = new Date();

  return (
    <div  className={style.footer}>
      <div className={style.footer__wrapper}>
      <Link to="/"><img src='./assets/word_logo.webp' alt="logo" className={style.footer__logo}/></Link>
      <span className={style.footer__text}>Created by Daniya Shagieva &copy; {today.getFullYear()}</span>
      </div>
    </div>
  )
}
