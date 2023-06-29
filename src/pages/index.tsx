import React from 'react';
import CharacterList from '@components/CharacterList/CharacterList';
import axiosInstance from '../services/api'
import Character from '../types/character';

const CharacterListPage = ({ characters }: { characters: Character[] }) => {
  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axiosInstance.get('/character');
    const characters = response.data.results;
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

export default CharacterListPage;