import React from 'react'
import styles from './NavBarItem.module.css'

const NavBarItem = ({ label, icon:Icon, selectedSection, setSelectedSection }) => {
  const isSelected = selectedSection === label
  return (
    <div
      className={`${ isSelected && styles.navbarSelectedItemContainer} ${styles.navbarItemContainer}`}
      onClick={() => setSelectedSection(label)}
    >
        <Icon />
        <p className={styles.navbarItemLabel}>
          {label}
        </p>
    </div>
  )
}

export default NavBarItem