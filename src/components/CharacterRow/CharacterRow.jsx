import React from 'react'
import { pluralize } from '../../../src/utils/pluralize'
import { TbWorld } from 'react-icons/tb'
import styles from './CharacterRow.module.css'

const CharacterRow = ({ imgPath, name, origin, episodesCount }) => { 
  const label = pluralize('episode', episodesCount)
  return (
    <div className={styles.rowContainer}>
        <img src={imgPath} alt="character-profile" className={styles.pic}/>
        <div className={styles.infoContainer}>
            <h2>{name}</h2>
            <div className={styles.originContainer}>
              <TbWorld size={16}/>
              <h3 className={styles.originLabel}> {origin}</h3>
            </div>
            <p className={styles.episodesCount}>{episodesCount} {label}</p>
        </div>
    </div>
  )
}

export default CharacterRow