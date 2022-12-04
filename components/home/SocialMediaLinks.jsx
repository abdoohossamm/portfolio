import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";

const SocialMediaLinks = () => {
    return (
        <div className="text-5xl flex justify-center gap-16 pb-5">
            <a href="https://github.com/abdoohossamm">
                <AiFillGithub className={"text-gray-800 dark:text-gray-400"}/>
            </a>
            <a href="https://www.linkedin.com/in/abdalrahman-hossam/">
                <AiFillLinkedin className={"text-blue-500"}/>
            </a>
            <a href="https://www.youtube.com/@CodeMorning">
                <AiFillYoutube className={"text-red-600"}/>
            </a>
        </div>
    );
};

export default SocialMediaLinks;
