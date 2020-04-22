import React from 'react';
import Navigation from "./components/Navigation"
import SearchForRegular from "./components/SearchForRegular"
// import MedicalDictionary from "./components/MedicalDictionary"
import Translation from "./components/Translation";
import './App.css';

function App() {
  return (
    <div className="App">
    <Translation text="привіт" language="fr" />
    {/* <MedicalDictionary /> */}
    {/* <SearchForRegular text="hello"/> */}
     {/* <Navigation /> */}
    </div>
  );
}

export default App;
