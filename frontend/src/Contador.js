import React, { useState} from 'react';
//import Header from './Header';

import Logon from './pages/Logon';

import './global.css';
import './pages/Logon/styles.css';

function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (    
      
        <div>
          <Header>
            Contador: {counter}
          </Header>
          <button onClick={increment}>Clica ai parça</button>
        </div>    
  );
}

export default App;
