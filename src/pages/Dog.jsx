import "./dog.css";

export default function Dog({ fur, setFur }) {
  const colours = [
    "#f6d774",
    "#8b5a2b",
    "#4b4949ff",
    "#eee",
    "#dc10b0",
    "#06aaebff",
  ];

  return (
    <div className="dog-layout">
      {/* SIDE COLOUR PANEL */}
      <div className="dog-controls">
        {colours.map((c) => (
          <button
            key={c}
            onClick={() => setFur(c)}
            className={`colour-btn ${fur === c ? "active" : ""}`}
            style={{ background: c }}
            aria-label={`Set fur colour ${c}`}
          />
        ))}
      </div>

      {/* DOG AREA */}
      <div className="dog-page">
        <h1 className="title">Dog</h1>
        <p>Choose a fur colour for your dog!</p>

        <article
          role="img"
          aria-label="Cartoon of a dog"
          style={{ "--fur": fur }}
        >
          <div className="shadow" />
          <div className="tail" />

          <div className="body">
            <div className="leg">
              <div className="paw" />
            </div>
            <div className="leg">
              <div className="paw" />
            </div>
          </div>

          <div className="ear" />
          <div className="ear" />

          <div className="head">
            <div className="brow" />
            <div className="brow" />
            <div className="eye" />
            <div className="eye" />
            <div className="nose" />
            <div className="tongue" />
          </div>
        </article>
      </div>
    </div>
  );
}
