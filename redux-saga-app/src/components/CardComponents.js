import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.user.name}</h3>
      <h4>{props.user.company.name}</h4>
      <p>{props.user.company.catchPhrase}</p>
    </div>
  )
}
export default Card;