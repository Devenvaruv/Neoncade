import React from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';

const screenshotImage = `url(${process.env.PUBLIC_URL}/image.png)`;
const raid = `url(${process.env.PUBLIC_URL}/raid.jpg)`;
const asteroid = `url(${process.env.PUBLIC_URL}/asteroid.jpg)`;
const petrescue = `url(${process.env.PUBLIC_URL}/pet_rescue.jpg)`;


const games = [
  {
    id: 1,
    title: 'Pluto’s Revenge',
    creator: 'Marcos',
    baseGame: 'Asteroid Defense',
    url: 'https://example.com/neon-outrun',
    screenshot: asteroid,
    accent: '#7c8bff',
    accentShadow: 'rgba(124, 139, 255, 0.4)',
  },
  {
    id: 2,
    title: 'Evan’s Asteroid Defense',
    creator: 'Evan',
    baseGame: 'Asteroid Defense',
    url: 'https://alien-invasion-one.vercel.app/',
    screenshot: asteroid,
    accent: '#ff6b6b',
    accentShadow: 'rgba(255, 107, 107, 0.42)',
  },
  {
    id: 3,
    title: 'Shrimpy Shooter',
    creator: 'Ailsa',
    baseGame: 'Raid Over Enemy Territory',
    url: 'https://shrimpy-shooter.vercel.app/',
    screenshot: `url(${process.env.PUBLIC_URL}/Ailsa.png)`,
    accent: '#ff8ec7',
    accentShadow: 'rgba(255, 142, 199, 0.42)',
  },
  {
    id: 4,
    title: 'Saving Pibble',
    creator: 'Diego',
    baseGame: 'Asteroid Defense',
    url: 'https://example.com/slipstream-spire',
    screenshot: asteroid,
    accent: '#7ef9c5',
    accentShadow: 'rgba(126, 249, 197, 0.36)',
  },
  {
    id: 5,
    title: 'Raidian’s Drone Simulation Exercise',
    creator: 'Tianqi',
    baseGame: 'Raid Over Enemy Territory',
    url: 'https://raidian-drone-simulation-exercise.vercel.app/',
    screenshot: `url(${process.env.PUBLIC_URL}/tianqi.png)`,
    accent: '#64c7ff',
    accentShadow: 'rgba(100, 199, 255, 0.4)',
  },
  {
    id: 6,
    title: 'Run Tail',
    creator: 'Vivian',
    baseGame: 'Pet Rescue',
    url: 'https://run-tail-g.vercel.app/',
    screenshot: petrescue,
    accent: '#ff7ad1',
    accentShadow: 'rgba(255, 122, 209, 0.42)',
  },
  {
    id: 7,
    title: 'Paw Patrol',
    creator: 'Evana',
    baseGame: 'Pet Rescue',
    url: 'https://paw-patrol-web.vercel.app',
    screenshot: petrescue,
    accent: '#8ef1ff',
    accentShadow: 'rgba(142, 241, 255, 0.38)',
  },
  {
    id: 8,
    title: 'Paw Patrol',
    creator: 'Evelyn',
    baseGame: 'Pet Rescue',
    url: 'https://example.com/stray-voltage',
    screenshot: petrescue,
    accent: '#64f4ac',
    accentShadow: 'rgba(100, 244, 172, 0.4)',
  },
  {
    id: 9,
    title: 'Galaxy Defenders',
    creator: 'Antoni',
    baseGame: 'Asteroid Defense',
    url: 'https://galaxy-defenders.vercel.app/',
    screenshot: asteroid,
    accent: '#6ad1ff',
    accentShadow: 'rgba(106, 209, 255, 0.38)',
  },
  {
    id: 10,
    title: 'Corki Farming Simulator',
    creator: 'Angelina',
    baseGame: 'Custom',
    url: 'https://corki-farming-simulator.vercel.app/',
    screenshot: `url(${process.env.PUBLIC_URL}/Angelina.png)`,
    accent: '#92a8ff',
    accentShadow: 'rgba(146, 168, 255, 0.4)',
  },
  {
    id: 11,
    title: 'Pete’s 1942',
    creator: 'Pete',
    baseGame: '1942',
    url: 'https://airships-r7tq.vercel.app/',
    screenshot: `url(${process.env.PUBLIC_URL}/pete.jpg)`,
    accent: '#ffa55f',
    accentShadow: 'rgba(255, 165, 95, 0.42)',
  },
  {
    id: 12,
    title: 'DogFight45',
    creator: 'Puranjai',
    baseGame: 'Raid Over Enemy Territory',
    url: 'https://dogfight45-build-5nn52uskv-puranjaigarg783s-projects.vercel.app/',
    screenshot: raid,
    accent: '#c5f36b',
    accentShadow: 'rgba(197, 243, 107, 0.36)',
  },
  {
    id: 13,
    title: 'Space Ace',
    creator: 'Laurence',
    baseGame: 'Asteroid Defense',
    url: 'https://space-ace.vercel.app/',
    screenshot: `url(${process.env.PUBLIC_URL}/Laurence.png)`,
    accent: '#6fd1ff',
    accentShadow: 'rgba(111, 209, 255, 0.4)',
  },
  {
    id: 14,
    title: 'Fox One',
    creator: 'Justin',
    baseGame: 'Raid Over Enemy Territory',
    url: 'https://1942-game-brown.vercel.app/',
    screenshot: raid,
    accent: '#ff76b8',
    accentShadow: 'rgba(255, 118, 184, 0.42)',
  },
  {
    id: 15,
    title: 'Seth’s Asteroid Defense',
    creator: 'Seth',
    baseGame: 'Asteroid Defense',
    url: 'https://asteroid-defense-online-web.vercel.app/',
    screenshot: `url(${process.env.PUBLIC_URL}/Seth.jpg)`,
    accent: '#ff9270',
    accentShadow: 'rgba(255, 146, 112, 0.4)',
  },
];

class App extends React.Component {
  constructor() {
    super();
    const shuffled = this.shuffleGames(games);
    this.state = {
      games: shuffled,
      searchfield: '',
    };
  }

  shuffleGames = (list) => {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredGames = this.state.games.filter((game) =>
      game.creator.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );

    return (
      <div className="app">
        <header className="hero">
          <h1 className="hero__title">
            {'Neoncade'.split('').map((char, idx) => (
              <span
                key={idx}
                className={`hero__title-letter ${
                  idx < 4 ? 'hero__title-letter--neon' : 'hero__title-letter--cade'
                }`}
              >
                {char}
              </span>
            ))}
          </h1>
          <SearchBox searchChange={this.onSearchChange} />
        </header>

        <Scroll>
          <ErrorBoundry>
            {filteredGames.length === 0 ? (
              <p className="empty-state">No creators found. Try another name.</p>
            ) : (
              <CardList games={filteredGames} />
            )}
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
