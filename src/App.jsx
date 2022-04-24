import React from 'react';
import './App.css';
import RoutesApp from './RoutesApp';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesApp/>
      </BrowserRouter>

    </div>
  );
}

export default App;
