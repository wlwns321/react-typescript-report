import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Export from "./view/Export";
import FundCode from "./view/FundCode";
import DenseAppBar from "./style/DenseAppBar";
function App() {

     
    return (
        <>
            <DenseAppBar/>
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