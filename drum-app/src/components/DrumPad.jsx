import React from "react";
// import Button from "react-bootstrap/Button";

  function DrumPad({ pad, onClick, isActive }) {
    return (
      <button
        className={`drum-pad ${isActive ? "active" : ""}`}
        id={pad.id}
        onClick={() => onClick(pad.id, pad.key)}
        aria-label={`Play ${pad.id}`}
      >
        {pad.key}
        <audio className="clip" id={pad.key} src={pad.src}></audio>
      </button>
    );
  }

    export default DrumPad;