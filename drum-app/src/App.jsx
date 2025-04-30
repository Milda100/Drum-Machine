import { useEffect, useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const drumPads = [
  { id: "Heater-1", key: "Q", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
  { id: "Heater-2", key: "W", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
  { id: "Heater-3", key: "E", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
  { id: "Heater-4", key: "A", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
  { id: "Heater-6", key: "S", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
  { id: "Dsc_Oh", key: "D", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
  { id: "Kick_n_Hat", key: "Z", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
  { id: "RP4_KICK_1", key: "X", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
  { id: "Cev_H2", key: "C", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" }
];

function App() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleKeydown = (event) => {
      const key = event.key.toUpperCase();
      const audioElement = document.getElementById(key);
      
      if (audioElement) {
        const drumPad = audioElement.parentElement;
        audioElement.play();
        setDisplayText(drumPad.id); // Set display text to the id of the drum pad
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

   // Function to handle button clicks
   const handleButtonClick = (padId, audioId) => {
    const audioElement = document.getElementById(audioId);
    if (audioElement) {
      audioElement.play();
      setDisplayText(padId);
    }
  };


  return (
    <>
    <h1>Drum Machine</h1>
      <Container id="drum-machine">
        <div id="display">
          {drumPads.map((pad) => (
            <Button 
              key={pad.key} 
              className="drum-pad" 
              id={pad.id} 
              onClick={() => handleButtonClick(pad.id, pad.key)}
            >
              {pad.key}
              <audio className="clip" id={pad.key} src={pad.src}></audio>
            </Button>
          ))}
          <p>{displayText}</p>
        </div>
      </Container>
    </>
  );
}

export default App
