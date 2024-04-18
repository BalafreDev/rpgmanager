'use client'
import { Bars3Icon, PowerIcon, BellIcon } from "@heroicons/react/24/outline"
import Navlink from "./navLink/NavLink"

import styles from './navbar.module.css'
import { useState } from "react"
import ProfileMenuPicture from "./ProfileMenu"
import { handleLogout } from "@/lib/action"
import { auth } from "@/lib/auth"


export default function Links({session}: {session:any} ) {
  const [open, setOpen] = useState(false);

// TEMPORARY CONDITIONS
const isAdmin = false
const notifications = ['a', 'b', 'c','a','a'];



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
              {
                session.user?.isAdmin && (
                  <Navlink item={{ title: "Admin", path: "/admin", itemType: "link" }} />
                )
              }
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
              <form action={handleLogout}>
              <button className={styles.logoutButton}>              
                <PowerIcon />
              </button>
              </form>
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