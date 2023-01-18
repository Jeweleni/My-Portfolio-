import Navbar from './Navbar';
import {BrowserRouter as Router } from "react-router-dom"
import ReactSwitch from 'react-switch';
import { createContext, useState } from 'react';
import AnimatedRoutes from './AnimatedRoutes';
import About from './About';
import Home from './Home';





export const ThemeContext = createContext("null");


function App() {


  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) =>(curr === "light" ? "dark" : "light"));
   };
 
  return (
    <Router>
      <ThemeContext.Provider  value={{theme, setTheme}}>
      <div className="App" id={theme}> 
    
    
        <Navbar/>
        
        
      
        <div className='switch'>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        
       
        <div className='content'>
        
         <AnimatedRoutes/>
        </div>
        
        
      </div>
      </ThemeContext.Provider>
    </Router>
  );
  
}

export default App;
