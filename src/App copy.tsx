import React from 'react';
import './App.css';


import Hello from "./components/Hello"
import Zujian from "./components/Zujian"
import UseStateA from "./components/UseStateA"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello
        // namea="hello text"
        />
        <Zujian />
        <UseStateA />
      </header>
    </div>
  );
}

export default App;
