import React from "react";
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import MainPage from "./MainPage"
import MedicalDictionary from "./MedicalDictionary"
import RegularDictionary from "./RegularDictionary"

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
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={MainPage}></Route>
                <Route exact path="/medical_dictionary" component={MedicalDictionary}></Route>
                <Route exact path="/thesaurus" component={RegularDictionary}></Route>
            </Switch>
        </Router>
    )
}

export default Navigation;