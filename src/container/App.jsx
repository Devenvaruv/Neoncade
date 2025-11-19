import React from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';

const screenshotImage = `url(${process.env.PUBLIC_URL}/image.png)`;

const games = [
  {
    id: 1,
    title: 'Neon Outrun',
    creator: 'Night Signal',
    baseGame: 'Skyline Rush',
    description: 'Sprint through a synth-lit highway dodging traffic and hunting for perfect drifts.',
    url: 'https://example.com/neon-outrun',
    screenshot: screenshotImage,
    accent: '#7c8bff',
    accentShadow: 'rgba(124, 139, 255, 0.4)',
  },
  {
    id: 2,
    title: 'Orbital Flip',
    creator: 'Tiny Nebula',
    baseGame: 'Solar Stack',
    description: 'One-button gravity flips through orbital rings packed with traps and portals.',
    url: 'https://example.com/orbital-flip',
    screenshot: screenshotImage,
    accent: '#ff6b6b',
    accentShadow: 'rgba(255, 107, 107, 0.42)',
  },
  {
    id: 3,
    title: 'Hollow Pulse',
    creator: 'Echo Vessel',
    baseGame: 'Pulse Runner',
    description: 'Time your dashes between laser shutters in a looping underground relay.',
    url: 'https://example.com/hollow-pulse',
    screenshot: screenshotImage,
    accent: '#ff8ec7',
    accentShadow: 'rgba(255, 142, 199, 0.42)',
  },
  {
    id: 4,
    title: 'Slipstream Spire',
    creator: 'Atlas Arcade',
    baseGame: 'Tower Glide',
    description: 'Climb an endless spire with air-dash boosts and momentum driven swings.',
    url: 'https://example.com/slipstream-spire',
    screenshot: screenshotImage,
    accent: '#7ef9c5',
    accentShadow: 'rgba(126, 249, 197, 0.36)',
  },
  {
    id: 5,
    title: 'Circuit Bloom',
    creator: 'Lumen Foundry',
    baseGame: 'Garden Runner',
    description: 'Grow light-vines across floating tiles while dodging corrosive rain bursts.',
    url: 'https://example.com/circuit-bloom',
    screenshot: screenshotImage,
    accent: '#64c7ff',
    accentShadow: 'rgba(100, 199, 255, 0.4)',
  },
  {
    id: 6,
    title: 'Chroma Courier',
    creator: 'Parcel Punk',
    baseGame: 'Courier Dash',
    description: 'Deliver neon parcels across rooftops with wall-runs and color-coded jump pads.',
    url: 'https://example.com/chroma-courier',
    screenshot: screenshotImage,
    accent: '#ff7ad1',
    accentShadow: 'rgba(255, 122, 209, 0.42)',
  },
  {
    id: 7,
    title: 'Glass Harbor',
    creator: 'Fjord Loop',
    baseGame: 'Harbor Drift',
    description: 'Sail vaporwave boats across mirrored water, chaining perfect turns for speed.',
    url: 'https://example.com/glass-harbor',
    screenshot: screenshotImage,
    accent: '#8ef1ff',
    accentShadow: 'rgba(142, 241, 255, 0.38)',
  },
  {
    id: 8,
    title: 'Stray Voltage',
    creator: 'Signal Colony',
    baseGame: 'Voltage Veil',
    description: 'Dodge roaming arcs in an arena that rearranges itself every 15 seconds.',
    url: 'https://example.com/stray-voltage',
    screenshot: screenshotImage,
    accent: '#64f4ac',
    accentShadow: 'rgba(100, 244, 172, 0.4)',
  },
  {
    id: 9,
    title: 'Kiteforge',
    creator: 'Blue Ember',
    baseGame: 'Windbinder',
    description: 'Tug physics-heavy kites through storm tunnels to reactivate ancient turbines.',
    url: 'https://example.com/kiteforge',
    screenshot: screenshotImage,
    accent: '#6ad1ff',
    accentShadow: 'rgba(106, 209, 255, 0.38)',
  },
  {
    id: 10,
    title: 'Aerial Relay',
    creator: 'Paper Planet',
    baseGame: 'Sky Spikes',
    description: 'Pass momentum between drones mid-flight to keep a data packet in the air.',
    url: 'https://example.com/aerial-relay',
    screenshot: screenshotImage,
    accent: '#92a8ff',
    accentShadow: 'rgba(146, 168, 255, 0.4)',
  },
  {
    id: 11,
    title: 'Supernova Rail',
    creator: 'Horizon Bloom',
    baseGame: 'Railbound',
    description: 'Slide solar carts around asteroids, timing jumps to avoid collapsing rails.',
    url: 'https://example.com/supernova-rail',
    screenshot: screenshotImage,
    accent: '#ffa55f',
    accentShadow: 'rgba(255, 165, 95, 0.42)',
  },
  {
    id: 12,
    title: 'Vapor Field',
    creator: 'Studio Ember',
    baseGame: 'Mist March',
    description: 'Foggy arena combat with silhouettes only-listen for tells to land strikes.',
    url: 'https://example.com/vapor-field',
    screenshot: screenshotImage,
    accent: '#c5f36b',
    accentShadow: 'rgba(197, 243, 107, 0.36)',
  },
  {
    id: 13,
    title: 'Cascade Drift',
    creator: 'North Arc',
    baseGame: 'Glacier Run',
    description: 'Ice-surf down a procedurally carved canyon while outrunning a rushing wave.',
    url: 'https://example.com/cascade-drift',
    screenshot: screenshotImage,
    accent: '#6fd1ff',
    accentShadow: 'rgba(111, 209, 255, 0.4)',
  },
  {
    id: 14,
    title: 'Echo Isles',
    creator: 'Marlin Loom',
    baseGame: 'Island Hoppers',
    description: 'Rhythm-locked jumps across floating isles that pulse with the soundtrack.',
    url: 'https://example.com/echo-isles',
    screenshot: screenshotImage,
    accent: '#ff76b8',
    accentShadow: 'rgba(255, 118, 184, 0.42)',
  },
  {
    id: 15,
    title: 'Rift Metro',
    creator: 'Chrome Linen',
    baseGame: 'Subway Lines',
    description: 'Switch tracks through parallel dimensions to keep a metro car on schedule.',
    url: 'https://example.com/rift-metro',
    screenshot: screenshotImage,
    accent: '#ff9270',
    accentShadow: 'rgba(255, 146, 112, 0.4)',
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      games,
      searchfield: '',
    };
  }

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
