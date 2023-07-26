import './../src/styles/index.scss'
import { Link, Route, Routes } from "react-router-dom";
import AboutPageAsync from "./pages/AboutPage/AboutPAgeAsync";
import MainPageAsync from './pages/MainPage/MainPageAsync';
import {Suspense} from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


export const App = () => {
    const{theme, toggleTheme} = useTheme()
    return(
        <div className= {classNames('app', {'hoved' : true}, [theme])}>
            <Link to = '/'>Main</Link>
            <Link to = '/about'>About</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path="/about" element = {<AboutPageAsync />}></Route>
                    <Route path="/" element = {<MainPageAsync />}></Route>
                </Routes>
            </Suspense>
            
        </div>
    )
}