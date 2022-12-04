import HeadTag from '../components/head/HeadTag'
import NavBar from "../components/navigation/NavBar";
import Main from "../components/home/Main";
import About from "../components/about/About";
import React, { useState } from 'react';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)
    const mainStyle ="bg-gradient-to-l from-cyan-50 dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 px-10 lg:px-20"
    return (
        <div className={darkMode ? "dark":""}>
            <main className={mainStyle}>
                <HeadTag />
                <NavBar darkMode={darkMode} setMode={setDarkMode}/>
                <Main/>
                <About/>
            </main>
        </div>
  )
}
