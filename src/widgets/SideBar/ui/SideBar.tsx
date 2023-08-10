import { useState } from "react";
import cls from "./SideBar.module.scss"
import {classNames} from "shared/lib/classNames/classNames" 
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
interface SideBarProps {
className? : string,
}
export const SideBar = ({className} : SideBarProps ) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleColl = () => {
        setCollapsed( prev => !prev )
    }
    return (
        <div className = {classNames(cls.SideBar, {[cls.collapsed] : collapsed }, [className])}>
            <button onClick={toggleColl}>toggle</button>
            <div className= {cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
  )
};
