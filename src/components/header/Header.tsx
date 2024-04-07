
import Logo from "./Logo"
import Navbar from "./navbar/Navbar"

import styles from "./header.module.css"


export default function Header() {


  return (
    <header className={styles.container}>
      <Logo />
      <Navbar />
    </header>
  )
}