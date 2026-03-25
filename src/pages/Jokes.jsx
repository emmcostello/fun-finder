import { useState, useEffect } from "react";

export default function JokePage() {
  const [joke, setJoke] = useState("Loading...");
  const [reload, setReload] = useState(0);

  useEffect(() => {
    async function fetchJoke() {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const data = await res.json();
      setJoke(`${data.setup} — ${data.punchline}`);
    }

    fetchJoke();
  }, [reload]); // runs on load AND when reload changes

  return (
    <div>
      <h1 className="title">Joke Generator</h1>
      <p>{joke}</p>

      <button onClick={() => setReload(reload + 1)}>New joke</button>
    </div>
  );
}
