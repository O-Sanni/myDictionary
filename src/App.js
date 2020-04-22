import React from 'react';
import MedicalDictionary from "./components/MedicalDictionary"
import RegularDictionary from "./components/RegularDictionary"
import './App.css';

function App() {
  return (
    <div className="App">
     <RegularDictionary />
    <MedicalDictionary />
    </div>
  );
}

export default App;
