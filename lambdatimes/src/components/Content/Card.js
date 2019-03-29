import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.Headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.Img} />
        </div>
        <span>By {props.Author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
