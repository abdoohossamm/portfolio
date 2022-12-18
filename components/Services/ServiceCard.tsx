import { FunctionComponent } from "react";

import { Service } from "../types";

const ServiceCard: FunctionComponent<{ value: Service }> =
    (
        {value: { Icon, title, about },}
    ) => {
        function escapeXssAbout() {
            return {
                __html: about,
            }
        }
        return (
            <article className="bg-gradient-to-bl from-cyan-300 to-teal-400 dark:from-cyan-700 dark:to-cyan-900 rounded-lg p-6
            hover:from-cyan-700 hover:to-teal-500 hover:text-white
            dark:hover:from-cyan-700 dark:hover:to-teal-400
            dark:hover:text-gray-800 dark:text-white
            shadow-2xl drop-shadow-2xl shadow-gray-500 dark:shadow-gray-500
            ">
                <div className={"flex items-center p-2 space-x-4 text-3xl  font-bold "}>
                    <Icon className={"text-6xl text-teal-800 dark:text-teal-200"}/> <h5>{title}</h5>
                </div>
                <p className={"pt-3"} dangerouslySetInnerHTML={escapeXssAbout()} />
            </article>
        );
    };
export default ServiceCard;