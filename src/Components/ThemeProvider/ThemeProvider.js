import React, { createContext, useContext, useState } from 'react'


const ThemeContext = createContext()

const ThemeProvider=({children})=>{

    const [theme, setTheme] = useState("light")

    const ToggleTheme=()=>{

        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return(
        <>
        <Themec/>
        <ThemeProvider value={{theme, ToggleTheme}}>
            {children}
        </ThemeProvider>
            <h1>Welcome to the Theme Provider</h1>
        </>
    )
};

const ThemeSwitcher  = () => {
    
    const {theme, ToggleTheme} = useContext(ThemeContext)
    return(
        <>
             <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button onClick={ToggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
        </>
    )
}

const Themec = () =>{
    return(
        <>
            <ThemeProvider>
                <ThemeSwitcher/>
            </ThemeProvider>
        </>
    )
}

export default ThemeProvider