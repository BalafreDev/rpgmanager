import Links from './Links'
import Menu from './Menu'
import Logo from '../header/Logo'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Menu />
      {/* <div>
        <Links />
      </div> */}
    </div>
  )
}