import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard/dashboard";
import KnowMore from "./knowmore/knowMore";
import Programdone from "./program/programdone";





function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Dashboard />} />
<Route path="/knowmore" element={<KnowMore />} />
<Route path="/Programdone" element={<Programdone />} />

      
      </Routes>
    </Router>
  );
}

export default App;
