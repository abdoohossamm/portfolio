import React from 'react';
import Image from "next/image";
import Profile from "../../public/ProfilePicture.png"
import {VscFolderLibrary} from "react-icons/vsc";
import {FiAward, FiUsers} from "react-icons/fi";

function About() {
    const cardStyle = "bg-gradient-to-b from-cyan-300 to-teal-400 " +
        "rounded-2xl border-2 border-transparent p-6 " +
        "text-center hover:from-cyan-700 hover:to-teal-500 hover:text-white"
    const iconStyle = "mx-auto text-2xl mb-2"
    return (
        <section id="about" className="min-h-screen">
            <div className={"text-center p-10"}>
                <h5 className="text-2xl pt-2">Get To Know</h5>
                <h2 className="p-10 text-5xl py-2 text-teal-600 font-medium">About Me</h2>
            </div>
            <div id="about-container" className={"grid p-10 sm:grid-cols-1 lg:grid-cols-3 gap-10"}>

                <div id="about-me" className="grid grid-cols-1 aspect-square rounded-3xl bg-gradient-to-b from-teal-500 sm:w-3/5 lg:w-5/6 sm:mx-auto"
                >
                    <Image src={Profile} alt={"Profile Picture"}
                           className="rounded-3xl overflow-hidden transform rotate-6 transition duration-200 delay-50 hover:rotate-0"
                    />
                </div>

                <div id="about-content" className={"pt-6 lg:col-span-2"}>
                    <div id="about-cards" className={"grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3"}>
                        <article className={cardStyle}>
                            <FiAward className={iconStyle}/>
                            <h5 className={"text-2xl"}>Experience</h5>
                            <small className="text-sm">2+ Years Working</small>
                        </article>

                        <article className={cardStyle}>
                            <FiUsers className={iconStyle}/>
                            <h5 className={"text-2xl"}>Clients</h5>
                            <small className="text-sm">10+ Worldwide</small>
                        </article>

                        <article className={cardStyle}>
                            <VscFolderLibrary className={iconStyle}/>
                            <h5 className={"text-2xl"}>Projects</h5>
                            <small className="text-sm">50+ Completed</small>
                        </article>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;