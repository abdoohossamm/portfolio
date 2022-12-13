import React from 'react';
import {services} from "../data";
import ServiceCard from "./ServiceCard";


function Services() {
    return (
        <section id="services" className="min-h-screen">
            <div className={"text-center p-6"}>
                <h5 className="text-2xl pt-2 dark:text-white">What I Offer</h5>
                <h2 className="p-10 text-4xl lg:text-5xl py-2 text-teal-600 font-medium">Services</h2>
            </div>
            <div id="services-cards" className={"grid gap-3 md:gap-4 lg:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"}>
                {services.map((service, i) => (
                    <ServiceCard value={service} key={i} />
                ))}
            </div>

        </section>
    );
}

export default Services;