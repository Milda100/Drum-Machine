import Button from 'react-bootstrap/Button'

  function DrumPad({ pad, onClick }) {
    return (
      <Button
        className="drum-pad"
        id={pad.id}
        onClick={() => onClick(pad.id, pad.key)}
        aria-label={`Play ${pad.id}`}
      >
        {pad.key}
        <audio className="clip" id={pad.key} src={pad.src}></audio>
      </Button>
    );
  }

    export default DrumPad;