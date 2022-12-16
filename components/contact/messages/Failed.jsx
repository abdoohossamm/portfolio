import React from 'react';
import {MdOutlineSmsFailed} from "react-icons/md";

const Failed = () => {
    return (
    <div className="pop-up backdrop-blur-md bg-red-500 text-gray-800  dark:bg-red-800 dark:text-white font-bold"
         role="alert">
        <div className="flex">
            <div className="p-1">
                <MdOutlineSmsFailed className={"text-3xl"}/>
            </div>
            <div>
                <p className="font-bold">An error happened while sending the message</p>
                <p className="text-sm">Something not ideal happened, please try to message me on other platform.</p>
            </div>
        </div>
    </div>
    );
};

export default Failed;
