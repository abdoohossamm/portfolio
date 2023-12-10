import React from 'react';
import SocialMediaLinks from "./SocialMediaLinks";
import Image from "next/image";
import waving from "../../public/waving-avatar.png";
import {MdOutlineFileDownload} from "react-icons/md";


const Main = () => {
    return (
        <section id="main" className="min-h-screen">
            <div className={"text-center p-10"}>
                <h3 className={"text-2xl pt-2 dark:text-white"}>Hello, I'm</h3>
                <h2 className={"text-4xl lg:text-5xl py-2 text-teal-600 font-medium"}>Abdalrahman Mohamed</h2>
                <h3 className={"text-2xl pt-2 dark:text-white"}>
                    Software Engineer & Fullstack Developer
                </h3>
                <h3 className={"text-2xl pb-2 dark:text-white"}>(Backend-heavy)</h3>
                <div className={"text-md py-5 leading-8 text-gray-800 dark:text-white"}>
                    <p>
                        Freelancer providing services for web developing, software engineering, and IT needs.
                    </p>
                    <p>
                        Join me down below and let's get cracking!
                    </p>
                </div>

            </div>

            <SocialMediaLinks />
            <div className="flex justify-center gap-16 py-3 text-gray-300">
                <a className="justify-center bg-gradient-to-r from-cyan-700 to-teal-400 text-white text-lg px-4 py-2 rounded-full"
                   href="/Abdalrahman Mohamed resume.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   download="Abdalrahman Mohamed resume.pdf"
                >
                    <MdOutlineFileDownload className={"mx-auto inline"} /> Resume
                </a>
            </div>
            <div className={"relative mx-auto bg-gradient-to-b from-teal-500 dark:from-cyan-700 rounded-full w-72 h-72 mt-10 overflow-hidden md:w-80 md:h-80 lg:w-96 lg:h-96"}>
                <Image
                    src={waving}
                    alt={"waving avatar"}
                    layout={"fill"}
                    objectFit={"cover"}
                />
            </div>
        </section>
    );
};

export default Main;
