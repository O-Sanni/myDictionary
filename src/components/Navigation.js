import React from "react";
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import MainPage from "./MainPage"
import MedicalDictionary from "./MedicalDictionary"
import RegularDictionary from "./RegularDictionary"
import TranslationPage from "./TranslationPage";

//navigation component will have 4 links and 4 route each route will call exact path for specific component
function Navigation(){
    return (
        <Router>
            <nav id="navigation">
                <ul id="nav-ul">
                    <li className="nav-lists">
                        <Link to="/">Home Page</Link>
                    </li>
                    <li className="nav-lists">
                        <Link to="/medical_dictionary">Medical Dictionary</Link>
                    </li>
                    <li className="nav-lists">
                        <Link to="/thesaurus">Thesaurus</Link>
                    </li>
                    <li className="nav-lists">
                        <Link to="/translation">Translation</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
            {/* Route should have exact path in order to show correct page */}
                <Route exact path="/" component={MainPage}></Route> 
                <Route exact path="/medical_dictionary" component={MedicalDictionary}></Route>
                <Route exact path="/thesaurus" component={RegularDictionary}></Route>
                <Route exact path="/translation" component={TranslationPage} ></Route>
            </Switch>
        </Router>
    )
}

export default Navigation;