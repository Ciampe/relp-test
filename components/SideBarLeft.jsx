import React from 'react'
import styles from './SideBarLeft.module.css'
import avatar from '../public/assets/profile.jpg'
import Image from 'next/image'

const SideBarLeft = ({ userName, position }) => {
  return (
    <div className={styles.sideBarLeftContainer}>
      <div className={styles.backgroundImage}></div>
      <Image className={styles.profilePic} src={avatar} alt="Profile" />
      <div className={styles.userInformation}>
        <h3>{userName}</h3>
        <p>{position}</p>
      </div>
    </div>
  )
}

export default SideBarLeft