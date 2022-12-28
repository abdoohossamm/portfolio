import { FunctionComponent, useState } from "react";
import {AiFillGithub, AiOutlineLink} from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../../types";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image from "next/image";

const ProjectCard: FunctionComponent<{
    project: IProject;
}> = ({
          project: {
              name,
              image_path,
              category,
              deployed_url,
              description,
              github_url,
              key_techs,
          },
      }) => {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div>
            <div className="cursor-pointer" onClick={() => setShowDetail(true)}>
            <Image
                src={image_path[0]}
                alt={name}
                layout="responsive"
                height="150"
                width="300"
            />
            <p className="my-2 text-center font-bold lg:text-2xl text-xl">{name}</p>
            </div>
            {showDetail && (
                <div className="fixed justify-center inset-y-10 left-0 lg:top-[10%] z-10 grid sm:w-full lg:w-full h-fit
                p-4 lg:p-14 md:p-8 overflow-hidden lg:grid-cols-2 lg:p-20 gap-x-12
                text-black bg-gradient-to-bl from-cyan-100 to-teal-100 dark:from-cyan-700 dark:to-cyan-900 dark:text-white dark:from-gray-800 dark:to-gray-600 lg:rounded-3xl">
                    <div className={"pt-12 md:pt-0 lg:pt-0 w-full"}>
                        <AwesomeSlider >
                            {image_path.map((image) => (
                                <div>
                                    <Image className={"w-fit"} src={image} width={2000} height={2000} alt={"image"} layout="responsive"/>
                                </div>
                            ))}
                        </AwesomeSlider>

                        <div className="flex justify-center mb-4 space-x-3 mt-16">
                            {
                            github_url ?
                            <a
                                href={github_url}
                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-cyan-200 dark:bg-cyan-700 rounded-lg"
                            >
                                <AiFillGithub /> <span>Github</span>
                            </a>
                                :
                                <a
                                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-gray-500  rounded-lg"
                                    disabled
                                >
                                    <AiFillGithub /> <span>Unavailable</span>
                                </a>
                            }
                            {
                                deployed_url ?
                                    <a
                                        href={deployed_url}
                                        className="flex items-center px-4 py-2 space-x-3 text-lg bg-cyan-200 dark:bg-cyan-700 rounded-lg"
                                    >
                                        <AiOutlineLink /> <span>Link</span>
                                    </a>
                                    :
                                    <a
                                        className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-gray-500 rounded-lg"
                                        disabled
                                    >
                                        <AiOutlineLink /> <span>Unavailable</span>
                                    </a>
                            }

                        </div>
                    </div>

                    <div>
                        <h2 className="mb-3 lg:text-3xl font-bold text-teal-600 text-2xl">{name}</h2>
                        <h3 className="mb-3 font-medium">{description}</h3>

                        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {key_techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 my-1 bg-cyan-200 dark:bg-cyan-700 rounded-lg"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => setShowDetail(false)}
                        className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-cyan-200 dark:bg-cyan-700"
                    >
                        <MdClose size={30} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;