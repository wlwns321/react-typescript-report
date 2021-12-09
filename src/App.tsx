import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Export from "./view/Export";
import FundCode from "./view/FundCode";
function App() {

     
    return (
        <>
          
            <Router> 
                <Link to="/">Home</Link>
                <Link to="/Export">Export</Link>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Export" element={<Export />} />
                </Routes>
            </Router>
            <FundCode/>
            
        </>
    );
}export default App;