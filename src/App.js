import React, { useState } from 'react';

import Modal from './components/modal';

function App() {

  const [ isVisible, setIsVisible ] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(true)}>Open Modal</button>
      { isVisible && <Modal onClose={() => setIsVisible(false) } id="modal" content={"text of Modal"}/> }
    </div>
  );
}

export default App;
