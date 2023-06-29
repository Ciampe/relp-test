import React, { useState } from 'react'
import Link from 'next/link'

import { navbarItems } from './config'
import homeLogo from '../../../public/assets/homeLogo.png';
import Image from 'next/image';
import NavBarItem from '../NavBarItem/NavBarItem'
import styles from './Navbar.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {

  const [selectedSection, setSelectedSection] = useState('')

  return (
    <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
            <Link href='/'>
                <Image
                    src={homeLogo}
                    alt='home-logo'
                    className={styles.logo}
                />
            </Link>
            <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input
                    type="text"
                    placeholder="Search"
                    className={styles.searchInput}
                />
            </div>
        </div>
        <div className={styles.navbarElementsContainer}>
            {navbarItems.map(({ label, icon }, index) => (
                <NavBarItem
                    key={index}
                    label={label}
                    icon={icon}
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}
                />
            ))}
        </div>
    </div>
  )
}

export default Navbar