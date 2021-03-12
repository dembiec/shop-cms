import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Logout from "./pages/Auth/Logout";
import Dashboard from "./pages/Dashboard";

class App extends Component
{
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/Logout" component={Logout} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        );
    }
}

export default App;