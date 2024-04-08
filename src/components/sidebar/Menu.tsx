'use client'
import { linksList } from "./linksList"
import { useState } from "react"

import styles from './sidebar.module.css'

export default function Menu() {
  const links = linksList;

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <div className={styles.links}key={link.title}>{link.title}</div>
      ))}
    </div>
  )
}