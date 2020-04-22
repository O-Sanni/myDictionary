import React from 'react';
import SearchForMedicalDictionary from "./components/SerachForMedicalDictionary";
import RegularDictionary from "./components/RegularDictionary"
import './App.css';

function App() {
  return (
    <div className="App">
     <RegularDictionary />
     {/* <SearchForMedicalDictionary id="helicobacter" /> */}
    </div>
  );
}

export default App;
