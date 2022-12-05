import {BsMoonStars} from "react-icons/bs";
import React from "react";
import {AiOutlineHome, AiOutlineProject, AiOutlineUser} from "react-icons/ai";
import {BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";

class NavBar extends React.Component {
    constructor(darkMode, setMode) {
        super(darkMode, setMode);
        this.state = {
            activeNav: "#main",
            itemName: '',
        };

        this.activeStyle = "text-gray-800 bg-white dark:text-sky-50 dark:bg-gray-800 dark:hover:text-black"
        this.itemNameStyle = "text-black capitalize bg-gradient-to-r from-cyan-500 to-teal-300 w-max z-10 py-2 px-3 fixed flex gap-3 rounded-xl dark:from-cyan-700 dark:to-cyan-900 bottom-16 left-1/2 transform-gpu -translate-x-1/2 dark:text-white invisible md:invisible lg:visible"
        this.navItemStyle = "p-3 rounded-full flex text-xl " +
        "hover:bg-gradient-to-r hover:from-teal-100 hover:to-cyan-50 hover:text-black"

    };

    removeItemName(){
        this.setState({itemName: ""})
    };

    componentDidMount() {
        let sections = document.querySelectorAll("section");
        // Change the nav active icon to the section shown while scrolling
        onscroll = () =>{
            let scrollPosition = document.documentElement.scrollTop;
            sections.forEach(section =>{
                if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight){
                    this.setState({activeNav:`#${section.attributes.id.value}`})
                    // Show the focused section in Nav text for phones.
                    // if (document.body.clientWidth <= 1024) {
                    //     document.getElementById("nav-text").innerText = section.attributes.id.value
                    // }
                }
            });
        };

    };

    render(){
        return(
            <nav>
                <span id={"nav-text"} className={this.state.itemName === "" ? this.itemNameStyle + " hidden" : this.itemNameStyle}>
                    {this.state.itemName}
                </span>

                <div className="bg-gradient-to-r from-cyan-500 to-teal-300
                text-white w-max z-10 py-2 px-3 fixed
                flex gap-3 rounded-full backdrop-blur-md bottom-2 left-1/2
                transform-gpu -translate-x-1/2
                dark:from-cyan-700 dark:to-cyan-900">

                    <a href={"#main"}
                       onClick={() => this.setState({activeNav: '#main'})}
                       onMouseEnter={() => this.setState({itemName: "Home"})}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#main" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <AiOutlineHome/>
                    </a>

                    <a href={"#about"}
                       onClick={() => this.setState({activeNav: '#about'})}
                       onMouseEnter={() => this.setState({itemName: "About"})}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#about" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <AiOutlineUser/>
                    </a>

                    <a href={"#projects"}
                       onClick={() => this.setState({activeNav: '#projects'})}
                       onMouseEnter={() => this.setState({itemName: "Projects"})}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#projects" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <AiOutlineProject/>
                    </a>

                    <a href={"#services"}
                       onClick={() => this.setState({activeNav: '#services'})}
                       onMouseEnter={() => this.setState({itemName: "Services"})}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#services" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <RiServiceLine/>
                    </a>

                    <a href={"#contact"}
                       onClick={() => this.setState({activeNav: '#contact'})}
                       onMouseEnter={() => this.setState({itemName: "Contact"})}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#contact" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <BiMessageSquareDetail/>
                    </a>

                    <span className={`${this.navItemStyle} bg-gray-900 text-white dark:bg-sky-50 dark:text-black cursor-pointer`}
                          onMouseOver={() => this.setState({itemName:this.props.darkMode ? "Light Mode" : "Dark Mode"})}
                          onMouseLeave={() => this.removeItemName()}
                          onClick={() => this.props.setMode(!this.props.darkMode)}
                    >
                        <BsMoonStars />
                    </span>
                </div>

            </nav>
        );
    };
}

export default NavBar
