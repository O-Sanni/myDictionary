import React from 'react';
import SearchForMedicalDictionary from "./components/SerachForMedicalDictionary";
import SearchForRegular from "./components/SearchForRegular"
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <SearchForMedicalDictionary id="helicobacter" /> */}
     <SearchForRegular id="obliquity"/>
    </div>
  );
}

export default App;
