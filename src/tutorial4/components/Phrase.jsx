import React from 'react';

const Phrase = ({ randomPhrase }) => {
  return (
    <div className='list'>
      {randomPhrase.map((phrase, index) => (
        <div className='block' key={index}>
          <h3>{phrase}</h3>
        </div>
      ))}
    </div>
  );
};

export default Phrase;
