import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1 className="title">Fun Finder</h1>
      <p>Bored this half term? Pick something to open:</p>
      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <Link to="/fun">
          <button>Fun Finder</button>
        </Link>
        <Link to="/stopwatch">
          <button>Stopwatch</button>
        </Link>
        <Link to="/jokes">
          <button>Jokes</button>
        </Link>
        <Link to="/dog">
          <button>Dog</button>
        </Link>
      </div>
    </div>
  );
}
