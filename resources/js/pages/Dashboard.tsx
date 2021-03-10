import React, {Component} from "react";
import Header from "../components/Header/Header";

class Dashboard extends Component
{
    render() {
        return (
            <div className="w-full h-full flex flex-wrap place-content-start">
                <Header />
            </div>
        );
    }
}

export default Dashboard;