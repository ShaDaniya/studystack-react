import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import style from './mainlayout.module.scss'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className={style.container}>
      <Menu />
      <div className={style.main_content}>
      <Outlet />
      </div>
      <div className={style.footer}>
      <Footer />
      </div>
    </div>
  )
}
