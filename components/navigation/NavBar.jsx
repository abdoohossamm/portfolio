import {BsMoonStars} from "react-icons/bs";
import React from "react";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {useState} from "react";


const NavBar = ({darkMode, setMode}) => {
    const [activeNav, setActiveNav] = useState('#main')
    const navItemStyle = "bg-transparent p-3 rounded-full flex text-xl " +
        "hover:bg-gradient-to-r hover:from-teal-100 hover:to-cyan-50 hover:text-black"
    const [itemName, setItemName] = useState('')
    const activeStyle = "text-gray-800 bg-white dark:text-sky-50 dark:bg-gray-800 dark:hover:text-black"
    let itemNameStyle = "text-black bg-gradient-to-r from-cyan-500 to-teal-300 w-max z-10 py-2 px-3 fixed flex gap-3 rounded-xl dark:from-cyan-700 dark:to-cyan-900 bottom-16 left-1/2 transform-gpu -translate-x-1/2 dark:text-white"
    function removeItemName(){
        setItemName("")
    }

    return(

        <nav>
            <span id={"nav-text"} className={itemName === "" ? itemNameStyle + " hidden" : itemNameStyle}>
                {itemName}
            </span>

            <div className="bg-gradient-to-r from-cyan-500 to-teal-300
            text-white w-max z-10 py-2 px-3 fixed
            flex gap-3 rounded-full backdrop-blur-md bottom-2 left-1/2
            transform-gpu -translate-x-1/2
            dark:from-cyan-700 dark:to-cyan-900">

                <a href={"#main"}
                   onClick={() => setActiveNav('#main')}
                   onMouseEnter={() => setItemName("Home")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#main" ? `${activeStyle} ${navItemStyle}` : navItemStyle}
                >
                    <AiOutlineHome/>
                </a>

                <a href={"#about"}
                   onClick={() => setActiveNav('#about')}
                   onMouseEnter={() => setItemName("About")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#about" ? `${activeStyle} ${navItemStyle}` : navItemStyle}
                >
                    <AiOutlineUser/>
                </a>

                <a href={"#experience"}
                   onClick={() => setActiveNav('#experience')}
                   onMouseEnter={() => setItemName("Experience")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#experience" ? `${activeStyle} ${navItemStyle}` : navItemStyle}
                >
                    <BiBook/>
                </a>

                <a href={"#services"}
                   onClick={() => setActiveNav('#services')}
                   onMouseEnter={() => setItemName("Services")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#services" ? `${activeStyle} ${navItemStyle}` : navItemStyle}
                >
                    <RiServiceLine/>
                </a>

                <a href={"#contact"}
                   onClick={() => setActiveNav('#contact')}
                   onMouseEnter={() => setItemName("Contact")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#contact" ? `${activeStyle} ${navItemStyle}` : navItemStyle}
                >
                    <BiMessageSquareDetail/>
                </a>

                <span className={`${navItemStyle} bg-gray-900 text-white dark:bg-sky-50 dark:text-black cursor-pointer`}
                      onMouseOver={() => setItemName(darkMode ? "Light Mode" : "Dark Mode")}
                      onMouseLeave={() => removeItemName()}
                      onClick={() => setMode(!darkMode)}
                >
                    <BsMoonStars />
                </span>
            </div>

        </nav>
    );
};

export default NavBar
