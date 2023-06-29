import { render } from '@testing-library/react';
import CharacterList from './CharacterList';

const characters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    origin: {
      name: 'Earth (C-137)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
  },
];

test('renders the character list correctly', async () => {
  const { getByText } = render(<CharacterList characters={characters} />);

  const listContainer = await getByText('character-list-container');
  expect(listContainer).toHaveText('Rick Sanchez');
});