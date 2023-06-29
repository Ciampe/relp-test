import { BsHouseDoorFill, BsFillPeopleFill } from 'react-icons/bs'
import { BiPlanet } from 'react-icons/bi'
import { GiGalaxy } from 'react-icons/gi'
import { ImProfile } from 'react-icons/im'

export const navbarItems = [
  { label: 'Home', link: '/', icon: BsHouseDoorFill },
  { label: 'Characters', link: '/network', icon: BsFillPeopleFill },
  { label: 'Worlds', link: '/jobs', icon: BiPlanet },
  { label: 'Galaxies', link: '/messages', icon: GiGalaxy },
  { label: 'My Account', link: '/profile', icon: ImProfile },
];