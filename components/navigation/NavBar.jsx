import {BsMoonStars} from "react-icons/bs";
import React from "react";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {useState} from "react";


const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#main')
    const navItemStyle = "bg-transparent p-3 rounded-full flex text-xl " +
        "hover:bg-gradient-to-r hover:from-teal-100 hover:to-cyan-50 hover:text-black"
    const [itemName, setItemName] = useState('')
    let itemNameStyle = "text-black w-max z-10 py-2 px-3 fixed flex gap-3 rounded-xl backdrop-blur-md bottom-16 left-1/2 transform-gpu -translate-x-1/2"
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
            transform-gpu -translate-x-1/2">

                <a href={"#main"}
                   onClick={() => setActiveNav('#main')}
                   onMouseEnter={() => setItemName("Home")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#main" ? `active ${navItemStyle}` : navItemStyle}
                >
                    <AiOutlineHome/>
                </a>

                <a href={"#about"}
                   onClick={() => setActiveNav('#about')}
                   onMouseEnter={() => setItemName("About")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#about" ? `active ${navItemStyle}` : navItemStyle}
                >
                    <AiOutlineUser/>
                </a>

                <a href={"#experience"}
                   onClick={() => setActiveNav('#experience')}
                   onMouseEnter={() => setItemName("Experience")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#experience" ? `active ${navItemStyle}` : navItemStyle}
                >
                    <BiBook/>
                </a>

                <a href={"#services"}
                   onClick={() => setActiveNav('#services')}
                   onMouseEnter={() => setItemName("Services")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#services" ? `active ${navItemStyle}` : navItemStyle}
                >
                    <RiServiceLine/>
                </a>

                <a href={"#contact"}
                   onClick={() => setActiveNav('#contact')}
                   onMouseEnter={() => setItemName("Contact")}
                   onMouseLeave={() => removeItemName()}
                   className={activeNav === "#contact" ? `active ${navItemStyle}` : navItemStyle}
                >
                    <BiMessageSquareDetail/>
                </a>

                <span className={`${navItemStyle} bg-sky-50 text-black`}
                      onMouseEnter={() => setItemName("Dark/Light Mode")}
                      onMouseLeave={() => removeItemName()}
                >
                    <BsMoonStars className="cursor-pointer"/>
                </span>
            </div>

        </nav>
    );
};

export default NavBar
