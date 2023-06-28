import React from 'react'
import CharacterRow from './CharacterRow'
import styles from './CharacterList.module.css'

const CharacterList = ({ characters }) => {
  return (
    <div>
      <h1>Characters List</h1>
      <div className={styles.listContainer}>
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
    </div>
  )
}

export default CharacterList