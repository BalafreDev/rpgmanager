import Image from "next/image";
import Navlink from "./navLink/NavLink";
import { useState } from "react";
import styles from './navbar.module.css'

const links = [
  {
    title: "Profile",
    path: "/profile",
    itemType: "link",
  },
  {
    title: "Characters",
    path: "/characters",
    itemType: "link",
  },
  {
    title: "Groups",
    path: "/groups",
    itemType: "link",
  },
  {
    title: "Social",
    path: "/social",
    itemType: "link",
  },
]

export default function ProfileMenuPicture() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.profileMenuPicture}>
      <button className={styles.profileMenuButton} onClick={() => setOpen(prev => !prev)}>
        {/* Profile */}
        <Image src={'/default-user-picture-dark.svg'} width={40} height={40} alt="profile-picture" className={open ? styles.open : styles.close} />
      </button>
      {open && (
        <div className={styles.profileMenuLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )
}