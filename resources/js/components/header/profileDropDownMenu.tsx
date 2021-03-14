import React, {Component, Fragment} from "react";
import {Md5} from "ts-md5";
import {Link} from "react-router-dom";

interface Props {
    userData: string
}

interface State {
    profileIsOpen: boolean
}

class ProfileDropDownMenu extends Component<Props, State>
{
    state: State = {
        profileIsOpen: false
    }

    menuSwitch = () => {
        this.setState({
            profileIsOpen: !this.state.profileIsOpen
        });
    }

    render() {
        return (
            <Fragment>
                <button
                    className="relative w-9 h-9 focus:outline-none"
                    onClick={this.menuSwitch}
                >
                    <img
                        className="rounded-full"
                        src={`https://avatars.dicebear.com/api/jdenticon/${Md5.hashStr(this.props.userData)}.svg`}
                        alt="user placeholder"
                    />
                </button>
                <div className={`${this.state.profileIsOpen ? 'block' : 'hidden'} absolute origin-top-right top-16 rounded-md border border-cst-gray-4 bg-cst-gray-3 shadow-sm`}>
                    <ul className="text-white divide-y divide-cst-gray-1">
                        <li className="py-2 transition duration-150 ease-in-out hover:bg-cst-gray-1 rounded-t-md">
                            <Link className="px-6" to="#">My profile</Link>
                        </li>
                        <li className="py-2 transition duration-150 ease-in-out hover:bg-cst-gray-1 hover:bg-cst-gray-1">
                            <Link className="px-6" to="#">Settings</Link>
                        </li>
                        <li className="py-2 transition duration-150 ease-in-out hover:bg-cst-gray-1 hover:bg-cst-gray-1 rounded-b-lg">
                            <Link className="px-6" to="/logout">Log out</Link>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default ProfileDropDownMenu;