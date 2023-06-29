import React from 'react'
import styles from './SideBarLeft.module.css'
import avatar from '../../../public/assets/profile.jpg'
import Image from 'next/image'

const SideBarLeft = ({ userName, position }) => {
  return (
    <div>
      <div className={styles.sideBarLeftContainer}>
        <div className={styles.backgroundImage}></div>
        <Image
          className={styles.profilePic}
          src={avatar}
          alt="Profile"
        />
        <div className={styles.userInformation}>
          <h3 className={styles.userName}>{userName}</h3>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default SideBarLeft