import Footer from '../components/Footer/Footer'
import style from './mainlayout.module.scss'
import { Link, Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.header__wrapper}>
        <Link to="/"><img src='./assets/word_logo.webp' alt="logo" className={style.header__logo}/></Link>
        <ul className={style.header__nav}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/words">Words</Link></li>
          <li><Link to="/flashcards">Flashcards</Link></li>
        </ul>
        </div>
      </header>
      <div className={style.main_content}>
      <Outlet />
      </div>
      <div className={style.footer}>
      <Footer />
      </div>
    </div>
  )
}
