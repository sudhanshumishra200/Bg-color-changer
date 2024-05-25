// DiscoButton.jsx

import React from 'react';

function DiscoButton({ toggleDiscoMode, isDiscoMode }) {
  return (
    <div className='fixed flex flex-wrap justify-center bottom-24 insert-x-0 px-2 gap-2 bg-lime-400 rounded-lg'>
    <button onClick={toggleDiscoMode}>
      {isDiscoMode ? 'Turn Off Disco Mode' : 'Turn On Disco Mode'}
    </button>
    </div>
  );
}

export default DiscoButton;
