import React from "react";
import { Route, Routes, useLocation} from "react-router-dom"
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Error404 from './Error404';
import Portfolio from './Portfolio';
import {AnimatePresence} from "framer-motion"

function AnimatedRoutes  () {
    const location = useLocation();
    return ( 
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Portfolio' element={<Portfolio/>}/> 
        <Route path="/Contacts" element={<Contacts />} />
        <Route path='*' element={<Error404/>}/>
        </Routes>
        </AnimatePresence>
     );
}
 
export default AnimatedRoutes;