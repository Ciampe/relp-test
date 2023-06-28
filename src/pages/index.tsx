import React from 'react';
import axios from 'axios';
import CharacterList from '../../components/CharacterList';
import axiosInstance from '../services/api'

const CharacterListPage = ({ characters }) => {
  console.log(characters)
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