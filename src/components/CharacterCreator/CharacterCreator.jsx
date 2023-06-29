import React from 'react'
import styles from './CharacterCreator.module.css'
import avatar from '../../../public/assets/profile.jpg'
import Image from 'next/image'

const CharacterCreator = () => {
  return (
    <div className={styles.creatorContainer}>
      <Image
          className={styles.profilePic}
          src={avatar}
          alt="Profile"
      />
      <input type='text' className={styles.inputText} placeholder='Add new character'/>
    </div>
  )
}

export default CharacterCreator