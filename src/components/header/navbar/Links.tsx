'use client'
import { Bars3Icon } from "@heroicons/react/24/outline"
import Navlink from "./navLink/NavLink"

import styles from './navbar.module.css'
import { useState } from "react"

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "About",
    path: "/about",
  },
]

// TEMPORARY CONDITIONS
const session = true
const isAdmin = true

export default function Links() {
  const [open, setOpen] = useState(false);


  return (
    <div className={styles.container}>

      <div className={styles.links}>
        {links.map((link) => (

          <Navlink item={link} key={link.title} />
        ))}
        {
          session ? (
            <>
              {
                isAdmin && (
                  <Navlink item={{ title: "Admin", path: "/admin" }} />
                )
              }
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <Navlink item={{ title: "Login", path: "/login" }} />
          )
        }
      </div>
      <button className={styles.menuButton} onClick={()=>setOpen(prev=>!prev)}>
        {/* <div>menu</div> */}
        <Bars3Icon className={open? styles.open : styles.close} />
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )

}