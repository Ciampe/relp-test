import React from 'react'
import styles from './FriendRow.module.css'
import Image from 'next/image'

const FriendRow = ({ name, picPath, origen }) => {
  return (
    <div className={styles.friendRow}>
      <Image src={picPath} alt='Add-friend-profile' className={styles.friendPicture} />
      <div className={styles.friendInformationContainer}>
        <h5 className={styles.friendName}>{name}</h5>
        <p className={styles.friendOrigin}>{origen}</p>
        <button onClick={() => console.log('Following ' + name)} className={styles.followButton}>+ Follow</button>
      </div>
    </div>
  )
}

export default FriendRow