'use client'
import { linksList } from "./linksList"
import { useState } from "react"

import styles from './sidebar.module.css'
import Navlink from "./navLink/NavLink"

export default function Menu() {
  const links = linksList;

  return (
    <div className={styles.container}>
      {links.map((link) => {
        if (link.itemType === 'link') {
                    return (
            <div className={styles.links} key={link.title} >
              <Navlink item={link} />
            </div>
          )
        } else if (link.itemType === 'title') {
          return (
            <div className={styles.menuTitle} key={link.title}>
              {link.title}
            </div>
          )
        } else {
          return (<div className={styles.separator} key={link.title}></div>)
        }
      })}
    </div>
  )
}