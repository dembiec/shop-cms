import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/auth/login";
import Logout from "./pages/auth/logout";
import Dashboard from "./pages/dashboard";

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