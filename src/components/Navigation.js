import React from "react";
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import MainPage from "./MainPage"
import MedicalDictionary from "./MedicalDictionary"
import YranslationPage from "./TranslationPage"
import RegularDictionary from "./RegularDictionary"
import TranslationPage from "./TranslationPage";

function Navigation(){
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/medical_dictionary">Medical Dictionary</Link>
                    </li>
                    <li>
                        <Link to="/thesaurus">Thesaurus</Link>
                    </li>
                    <li>
                        <Link to="/translation">Translation</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={MainPage}></Route>
                <Route exact path="/medical_dictionary" component={MedicalDictionary}></Route>
                <Route exact path="/thesaurus" component={RegularDictionary}></Route>
                <Route exact path="/translation" cmponent={TranslationPage} ></Route>
            </Switch>
        </Router>
    )
}

export default Navigation;