import React from 'react'
import Link from 'next/link'
import styles from './NavBarItem.module.css'

const NavBarItem = ({ link, label, icon:Icon }) => {
  return (
    <div className={styles.navbarItemContainer}>
        <Icon />
        <p className={styles.navbarItemLabel}>
            <Link href={link}>{label}</Link>
        </p>
    </div>
  )
}

export default NavBarItem