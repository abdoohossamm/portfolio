import React from 'react';
import Image from "next/image";
import Profile from "../../public/ProfilePicture.png"
import CardItem from "./CardItem";
import {cards} from "../data";
import Resume from "./resume/Resume";

function About() {
    return (
        <section id="about" className="min-h-screen pb-12">
            <div className={"text-center p-6"}>
                <h5 className="text-2xl pt-2">Get To Know</h5>
                <h2 className="p-10 text-4xl lg:text-5xl py-2 text-teal-600 font-medium">About Me</h2>
            </div>
            <div id="about-container" className={"grid px-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10"}>

                <div id="about-me" className="grid grid-cols-1 aspect-square rounded-3xl bg-gradient-to-b from-teal-500 sm:w-3/5 lg:w-5/6 sm:mx-auto"
                >
                    <Image src={Profile} alt={"Profile Picture"}
                           className="rounded-3xl overflow-hidden transform rotate-6 transition duration-200 delay-50 hover:rotate-0 "
                    />
                </div>

                <div id="about-content" className={"py-6 lg:col-span-2"}>
                    <div id="about-cards" className={"grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3"}>
                        {cards.map((card, i) => (
                            <CardItem value={card} key={i} />
                        ))}
                    </div>
                    <h4 className={"text-xl px-6 py-4 text-gray-800 dark:text-sky-100"}>I am currently pursuing Bachelor Degree(Final Year) in Computer Science from University Of the People. I have 2+ years of experience in Web Development in different projects with different frameworks.</h4>
                    <Resume />
                </div>
            </div>
        </section>
    );
}

export default About;