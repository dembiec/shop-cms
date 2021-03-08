import React, {Component} from "react";
import axios from "axios";
import ValidationErrors from "./ValidationErrors";

interface State {
    email?: string,
    password?: string,
    errorEmail?: string,
    errorPassword?: string
}

class LoginForm extends Component<{}, State>
{
    state: State = {
        email: "",
        password: "",
        errorEmail: "",
        errorPassword: ""
    }

    save = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.currentTarget.name]: e.target.value
        });
    }

    send = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post( String(process.env.MIX_APP_URL+'/login'), {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
            window.location.href = String(process.env.MIX_APP_URL+'/dashboard');
        }).catch(error => {
            const errors = error.response.data;
            this.setState({
                errorEmail: errors.email ? errors.email[0] : "",
                errorPassword: errors.password ? errors.password[0] : ""
            });
        });
    }

    render() {
        return (
            <form className="flex flex-col justify-center" onSubmit={this.send}>
                <ValidationErrors error={this.state.errorEmail} for='email' />
                <input
                    className="my-2 p-3 rounded-xl border-2 border-cst-gray-1 bg-cst-black text-white focus:outline-none focus:border-dashed focus:border-blue-400"
                    autoComplete="off"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.save}
                />
                <ValidationErrors error={this.state.errorPassword} for="password" />
                <input
                    className="my-2 p-3 rounded-xl border-2 border-cst-gray-1 bg-cst-black text-white focus:outline-none focus:border-dashed focus:border-blue-400"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.save}
                />
                <button
                    className="mt-5 p-3 rounded-xl bg-cst-gray-2 border-b-5 border-cst-gray-1 text-white focus:outline-none transition duration-300 ease-in-out transform lg:hover:translate-y-0.5 lg:hover:scale-95"
                    type="submit"
                >
                    Sign in
                </button>
            </form>
        );
    }
}

export default LoginForm;