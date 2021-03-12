import React, {Component} from "react";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";

interface State {
    isLogoutError: boolean
}

class Logout extends Component<{}, State>
{
    state: State = {
        isLogoutError: false
    }

    render() {
        axios.post(
            String(process.env.MIX_APP_URL+'/logout')
        ).then(() => {
            localStorage.clear();
        }).catch(() => {
            this.setState({isLogoutError: true});
        });

        if (this.state.isLogoutError) {
            return (
                <div className="w-full h-full flex flex-wrap place-content-center">
                    <div className="w-auto h-auto">
                        <h1 className="mb-5 text-center text-4xl text-white">Log out failed.</h1>
                        <p className="text-gray-500">
                            Try again after going to the
                            <span> </span>
                            <Link className="pb-0.5 border-b border-dashed border-blue-400 transition duration-300 ease-in-out lg:hover:border-gray-500" to="/dashboard">dashboard</Link>.
                        </p>
                    </div>
                </div>
            );
        }

        return  <Redirect to="/login" />;
    }
}

export default Logout;