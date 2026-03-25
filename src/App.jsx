import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import FunFinder from "./pages/FunFinder";
import Stopwatch from "./pages/Stopwatch";
import Jokes from "./pages/Jokes";
import Dog from "./pages/Dog";

import { useState } from "react";

export default function App() {
  const [fur, setFur] = useState("#f6d774");

  return (
    <div>
      {/* NAVIGATION */}
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> <Link to="/fun">Fun Finder</Link>{" "}
        <Link to="/stopwatch">Stopwatch</Link> <Link to="/jokes">Jokes</Link>{" "}
        <Link to="/dog">Dog</Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fun" element={<FunFinder />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/dog" element={<Dog fur={fur} setFur={setFur} />} />
      </Routes>
    </div>
  );
}
