import React from 'react'
import CharacterRow from '@components/CharacterRow/CharacterRow'
import CharacterCreator from '../CharacterCreator/CharacterCreator'
import styles from './CharacterList.module.css'

const CharacterList = ({ characters }) => {
  return (
    <div className={styles.listContainer}>
      <CharacterCreator />
      <ul className={styles.list}>
        {characters.map((character) => (
          <CharacterRow
            key={character.id}
            name={character.name}
            origin={character.origin.name}
            imgPath={character.image}
            episodesCount={character.episode.length}
          />
        ))}
      </ul>
    </div>
  )
}

export default CharacterList