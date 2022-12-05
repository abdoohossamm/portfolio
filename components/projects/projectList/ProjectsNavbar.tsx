import { FunctionComponent } from "react";
import { Category } from "../../types";

export const NavItem: FunctionComponent<{
    value: Category | "all";
    handlerFilterCategory: Function;
    active: string;
}> = ({ value, handlerFilterCategory, active }) => {
    let className = "capitalize cursor-pointer bg-gradient-to-r from-cyan-700 to-teal-400 text-white py-1 px-2 rounded-xl hover:from-green-50";
    if (active === value) className += " from-cyan-200 text-black";

    return (
        <li className={className} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
}> = (props) => {
    return (
        <div className={"px-3 py-4"}>
            <div className="flex space-x-3 overflow-x-auto list-none">
                <NavItem value="all" {...props} />
                <NavItem value="react" {...props} />
                <NavItem value="vue" {...props} />
                <NavItem value="express" {...props} />
                <NavItem value="django" {...props} />
                <NavItem value="PHP" {...props} />
                <NavItem value="SQL" {...props} />
                <NavItem value="NoSQL" {...props} />
                <NavItem value="microservices" {...props} />
            </div>

        </div>
    );
};

export default ProjectsNavbar;