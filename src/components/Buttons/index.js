import React from 'react';

const Buttons = ({ setContent }) => {
  return (
    <div className="App">
      <button onClick={() => setContent('cats')}>Cats</button>
      <button onClick={() => setContent('dogs')}>Dogs</button>
      <button onClick={() => setContent('fish')}>Fish</button>
    </div>
  );
};

export default Buttons;
