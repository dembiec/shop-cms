import React, {Component} from "react";
import CollapseNav from "../context/collapseNav";
import Header from "../components/Header/Header";
import Nav from "../components/nav";

interface State {
    navStatus: boolean
}

class Dashboard extends Component<{}, State>
{
    state: State = {
        navStatus: true
    }

    collapseNav = (status: boolean) => {
        this.setState({navStatus: status});
    }

    render() {
        return (
            <div className="w-full h-full flex flex-wrap place-content-start">
                <CollapseNav.Provider value={
                    {
                        navStatus: this.state.navStatus,
                        collapseNav: this.collapseNav
                    }
                }>
                    <Header />
                    <Nav />
                </CollapseNav.Provider>
            </div>
        );
    }
}

export default Dashboard;