import React, {Component} from "react";
import LoginForm from "../../components/Auth/LoginForm";

class Auth extends Component
{
    render() {
        return (
            <div className="w-full h-full flex flex-wrap place-content-center">
                <div className="w-3/4 md:w-2/4 lg:w-1/4 h-auto">
                    <h1 className="mb-10 text-center text-4xl text-white">Sign in.</h1>
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default Auth;