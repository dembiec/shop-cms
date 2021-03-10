import React, {Component} from "react";
import ProfileDropDownMenu from "./ProfileDropDownMenu";
import NotificationDropDownMenu from "./NotificationDropDownMenu";

interface State {
    email: string,
    userName: string
}

class Header extends Component<{}, State>
{
    state: State = {
        email: "",
        userName: ""
    }

    componentDidMount() {
        const data = JSON.parse(
            String(
                localStorage.getItem('user')
            )
        );

        this.setState({
            email: data.email,
            userName: data.user_name
        });
    }

    render() {
        return (
            <header className="fixed top-0 left-0 z-20 w-full h-14 px-7 border-b-2 border-cst-gray-4 bg-cst-gray-3 shadow-sm">
                <div className="w-full h-full flex flex-row justify-start">
                    <div className="w-1/3 h-full">
                    </div>
                    <div className="w-2/3 h-full flex flex-row justify-end items-center space-x-6">
                        <h2 className="text-white">Hi, {this.state.userName}</h2>
                        <ProfileDropDownMenu userData={this.state.userName} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;