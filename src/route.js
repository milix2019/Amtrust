import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./Appbar";
import Home from "./App";
import Q1 from "./Question1";
import Q2 from "./Question2";
import Q3 from "./Question3";


class Routes extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/question1" component={Q1} />
                    <Route exact path="/question2" component={Q2} />
                    <Route exact path="/question3" component={Q3} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;
