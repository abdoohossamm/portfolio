import React from "react";

import { FunctionComponent } from "react";

import { Card } from "../types";

const CardItem: FunctionComponent<{ value: Card }> =
    (
        {value: { Icon, name, description },}
    ) => {
        return (
            <article className="bg-gradient-to-bl from-cyan-300 to-teal-400 dark:from-cyan-700 dark:to-cyan-900 rounded-2xl border-2 border-transparent p-6 text-center
            hover:from-cyan-700 hover:to-teal-500 hover:text-white
            dark:hover:from-cyan-700 dark:hover:to-teal-400
            dark:hover:text-gray-800 dark:text-white">
                <Icon className={"mx-auto text-2xl mb-2"}/>
                <h5 className={"text-2xl"}>{name}</h5>
                <small className="text-sm">{description}</small>
            </article>
        );
    };
export default CardItem;