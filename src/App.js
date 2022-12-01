import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from './About';
import Contacts from './Contacts';
import ReactSwitch from 'react-switch';
import { createContext, useState } from 'react';
import Error404 from './Error404';
import Portfolio from './Portfolio';



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
        
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path='/Portfolio' element={<Portfolio/>}/> 
          <Route path="/Contacts" element={<Contacts />} />
          <Route path='*' element={<Error404/>}/>
          </Routes>
        </div>
      </div>
      </ThemeContext.Provider>
    </Router>
  );
  
}

export default App;
