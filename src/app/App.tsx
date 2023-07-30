import './styles/index.scss'
import { Link, Route, Routes } from "react-router-dom";
import {Suspense} from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';



export const App = () => {
    const{theme, toggleTheme} = useTheme()
    return(
        <div className= {classNames('app', {'hoved' : true}, [theme])}>
            <Link to = '/'>Main</Link>
            <Link to = '/about'>About</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path="/about" element = {<AboutPage />}></Route>
                    <Route path="/" element = {<MainPage />}></Route>
                </Routes>
            </Suspense>
            
        </div>
    )
}