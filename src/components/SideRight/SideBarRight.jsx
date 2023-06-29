import React from 'react'
import styles from './SideBarRight.module.css'
import { friendsList } from './config'
import FriendRow from '@components/FriendRow/FriendRow'

const SideBarRight = () => {
  return (
    <div className={styles.sideBarRightContainer}>
        <h4 className={styles.title}>Add more aliens to your feed!</h4>
        <div className={styles.friendsListContainer}>
          {friendsList.map(({ name, picPath, origen }, index) => (
            <FriendRow
              key={index}
              name={name}
              picPath={picPath}
              origen={origen}
            />
          ))}
        </div>
    </div>
  )
}

export default SideBarRight