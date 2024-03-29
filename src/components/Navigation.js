import React from "react";
import {Route, Routes, Link , BrowserRouter as Router} from "react-router-dom";
import MainPage from "./MainPage"
import MedicalDictionary from "./MedicalDictionary"
import RegularDictionary from "./RegularDictionary"
import TranslationPage from "./TranslationPage";
import "../styles/MainPageandNavigation.scss"

//navigation component will have 4 links and 4 route each route will call exact path for specific component
function Navigation(){
    return (
        <Router>
            <nav id="navigation">
                <ul id="nav-ul">
                    <li className="nav-lists">
                        <Link className="class-link" to="/">Home Page</Link>
                    </li>
                    <li className="nav-lists">
                        <Link className="class-link" to="/medical_dictionary">Medical Dictionary</Link>
                    </li>
                    <li className="nav-lists">
                        <Link className="class-link" to="/thesaurus">Thesaurus</Link>
                    </li>
                    <li className="nav-lists">
                        <Link className="class-link" to="/translation">Translation</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
            {/* Route should have exact path in order to show correct page */}
                <Route exact path="/" element={<MainPage />}></Route> 
                <Route exact path="/medical_dictionary" element={<MedicalDictionary />}></Route>
                <Route exact path="/thesaurus" element={<RegularDictionary />}></Route>
                <Route exact path="/translation" element={<TranslationPage />} ></Route>
            </Routes>
        </Router>
    )
}

export default Navigation;