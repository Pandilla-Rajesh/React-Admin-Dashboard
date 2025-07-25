import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState(()=>localStorage.getItem('app-theme' || 'light'))

    // global-api-integration //

    const api = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/',
        headers:{
             'Content-Type': 'application/json'
        }
    })

    // end //

    useEffect(()=>{
        // document.documentElement.setAttribute('data-bs-theme', theme)
        // document.documentElement.setAttribute('data-layout-mode', theme)
        const html = document.documentElement
        html.setAttribute('data-bs-theme', theme);
        html.setAttribute('data-layout-mode', 'fluid');
        html.setAttribute('data-menu-color', 'dark');
        html.setAttribute('data-tobar-color', 'light');
        html.setAttribute('data-layout-position', 'fixed');
        html.setAttribute('data-sidenav-size', 'condensed')
        localStorage.setItem('app-theme', theme)
    }, [theme])
    
    return(
        <ThemeContext.Provider value={{theme, setTheme, api}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>useContext(ThemeContext)