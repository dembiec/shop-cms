import React, {Component} from "react";
import CollapseNav from "../../context/collapseNav";

class SwitchMenuButton extends Component
{
    static contextType = CollapseNav;

    collapse = () => {
        const {navStatus} = this.context;
        const {collapseNav} = this.context;

        collapseNav(!navStatus);
    }

    render() {
        return (
            <button
                className="relative w-6 h-6 focus:outline-none"
                onClick={this.collapse}
            >
                <svg
                    className="fill-current text-gray-400 transition duration-300 ease-in-out lg:hover:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 512 512"
                >
                    <g>
                        <path xmlns="http://www.w3.org/2000/svg" d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
                    </g>
                    <g>
                        <path xmlns="http://www.w3.org/2000/svg" d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/>
                    </g>
                    <g>
                        <path xmlns="http://www.w3.org/2000/svg" d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20    C512,404.954,503.046,396,492,396z"/>
                    </g>
                </svg>
            </button>
        );
    }
}

export default SwitchMenuButton;