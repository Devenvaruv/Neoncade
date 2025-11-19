import React from 'react';
import Card from './Card';

const CardList = ({ games }) => {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <Card
          key={game.id}
          title={game.title}
          creator={game.creator}
          baseGame={game.baseGame}
          description={game.description}
          url={game.url}
          screenshot={game.screenshot}
          accent={game.accent}
          accentShadow={game.accentShadow}
        />
      ))}
    </div>
  );
};

export default CardList;
