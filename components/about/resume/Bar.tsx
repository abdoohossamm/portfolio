

import { FunctionComponent } from "react";

import { Skill } from "../../types";

const Bar: FunctionComponent<{ value: Skill }> =
    (
        {value: { Icon, level, name },}
    ) => {
    const bar_width = `${level}%`;
    return (
        <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500 whitespace-nowrap">
            <div
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-cyan-700 to-teal-500 clear-both"
                style={{
                    width: bar_width,
                }}
            >
                <Icon className="mr-1 min-w-fit"/> {name}
            </div>
        </div>
    );
};
export default Bar;