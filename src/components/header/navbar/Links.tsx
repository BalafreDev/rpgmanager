'use client'
import { Bars3Icon, PowerIcon, BellIcon } from "@heroicons/react/24/outline"
import Navlink from "./navLink/NavLink"

import styles from './navbar.module.css'
import { useState } from "react"
import ProfileMenuPicture from "./ProfileMenu"

// TEMPORARY CONDITIONS
const session = true
const isAdmin = true
const notifications = ['a', 'b', 'c','a','a'];

export default function Links() {
  const [open, setOpen] = useState(false);


  return (
    <div className={styles.container}>

      <div className={styles.links}>
        {/* {links.map((link) => (

          <Navlink item={link} key={link.title} />
        ))} */}
        {
          session ? (
            <>
              {/* <Navlink item={{ title: "Profile", path: "/profile" }} /> */}
              <ProfileMenuPicture />
              {/* {
                isAdmin && (
                  <Navlink item={{ title: "Admin", path: "/admin" }} />
                )
              } */}
              <button className={styles.notifButton}>
                <div>
                  <BellIcon />
                </div>
                {notifications.length > 0 && (
                  <div className={styles.notifNumber}>
                    {notifications.length}
                  </div>
                )}
              </button>
              <button className={styles.logoutButton}>
                <PowerIcon />
              </button>
            </>
          ) : (
            <Navlink item={{ title: "Login/Signup", path: "/login", itemType: "link" }} />
          )
        }
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>
        <Bars3Icon className={open ? styles.open : styles.close} />
      </button>
    </div>
  )

}