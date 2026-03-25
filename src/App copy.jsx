import { useState } from "react";

import Home from "./pages/Home";
import FunFinder from "./pages/FunFinder";
import Stopwatch from "./pages/Stopwatch";
import Jokes from "./pages/Jokes";
import Dog from "./pages/Dog";

export default function App() {
  const [page, setPage] = useState("home");
  const [fur, setFur] = useState("#f6d774");

  return (
    <div>
      {/* NAV (optional, you can keep or remove) */}
      <nav style={{ marginBottom: 20 }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("fun")}>Fun Finder</button>
        <button onClick={() => setPage("stopwatch")}>Stopwatch</button>
        <button onClick={() => setPage("joke")}>Jokes</button>
        <button onClick={() => setPage("dog")}>Dog</button>
      </nav>

      {/* PAGES */}
      {page === "home" && <Home go={setPage} />}
      {page === "fun" && <FunFinder />}
      {page === "stopwatch" && <Stopwatch />}
      {page === "joke" && <Jokes />}
      {page === "dog" && <Dog fur={fur} setFur={setFur} />}
    </div>
  );
}
