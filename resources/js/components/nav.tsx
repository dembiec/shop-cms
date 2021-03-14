import React, {Component} from "react";
import CollapseNav from "../context/collapseNav";

class Nav extends Component
{
    static contextType = CollapseNav;

    render() {
        const {navStatus} = this.context;

        return (
            <nav className={`fixed top-14 left-0 z-10 ${navStatus ? 'hidden md:block' : 'block md:hidden'} w-auto h-full px-7 border-l-2 border-cst-gray-4 bg-cst-gray-3`}>
            </nav>
        );
    }
}

export default Nav;