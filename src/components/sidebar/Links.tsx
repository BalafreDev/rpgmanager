'use client'
import { Bars3Icon, PowerIcon } from "@heroicons/react/24/outline"
import Navlink from "../header/navbar/navLink/NavLink"

import styles from './sidebar.module.css'
import { useState } from "react"
import { linksList } from "./linksList"
import Link from "next/link"

const links = linksList

// TEMPORARY CONDITIONS
const session = true
const isAdmin = false

export default function Links() {
  const [open, setOpen] = useState(false);
  console.log(links);

  return (
    <div className={styles.container}>

      <div className={styles.menu}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
      </div>
      {/* {
          session ? (
            <>
              <Navlink item={{ title: "Profile", path: "/profile" }} />
              {
                isAdmin && (
                  <Navlink item={{ title: "Admin", path: "/admin" }} />
                )
              }
              <button className={styles.logoutButton}>
                <PowerIcon />
              </button>
            </>
          ) : (
            <Navlink item={{ title: "Login/Signup", path: "/login" }} />
          )
        } */}
    </div>
  )

}