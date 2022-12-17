import React from 'react';
import {MdDone} from "react-icons/md";

const Success = () => {
    return (
        <div className="pop-up backdrop-blur-md  bg-gradient-to-bl from-cyan-300 to-teal-400 dark:from-cyan-700 dark:to-cyan-900
         text-teal-900 text-gray-800 dark:text-white"
             role="alert">
            <div className="flex">
                <div className="py-1">
                    <MdDone className={"text-green-600 dark:text-green-500 text-3xl"}/>
                </div>
                <div>
                    <p className="font-bold">Message Sent successfully</p>
                    <p className="text-sm">I will reply to you as soon as possible thank you!</p>
                </div>
            </div>
        </div>
    );
};

export default Success;
