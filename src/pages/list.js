import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const characters = data.results;
    return {
      props: {
        characters,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        characters: [],
      },
    };
  }
}

export default CharacterList;