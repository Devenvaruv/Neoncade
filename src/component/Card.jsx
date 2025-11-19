import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    const { title, creator, baseGame, description, url, screenshot, accent, accentShadow } = this.props;

    return (
      <article className="game-card" style={{ '--accent': accent, '--accent-shadow': accentShadow }}>
        <div className="game-card__media" style={{ backgroundImage: screenshot }}></div>
        <div className="game-card__body">
          <div className="game-card__headline">
            <h2 className="game-card__title">
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h2>
            <button
              className="visit-button"
              type="button"
              onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
            >
              Visit
            </button>
          </div>
          <p className="game-card__meta">Creator: {creator}</p>
          <p className="game-card__meta game-card__meta--base">Base game: {baseGame}</p>
          <p className="game-card__description">{description}</p>
        </div>
      </article>
    );
  }
}

export default Card;
