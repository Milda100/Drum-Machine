import { useEffect, useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import DrumPad from './components/DrumPad'
import drumPads from './components/drumPadsObj'
import SocialIcons from './components/SocialIcons'


function App() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleKeydown = (event) => {
      const key = event.key.toUpperCase();
      const drumPad = drumPads.find(pad => pad.key === key);

      if (drumPad) {
        const audioElement = document.getElementById(key);
        if (audioElement) {
          audioElement.currentTime = 0; // Ensure playback starts from the beginning
          audioElement.play();
          setDisplayText(drumPad.id);
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
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
            <DrumPad key={pad.key} pad={pad} onClick={handleButtonClick} />
          ))}
          <p>{displayText}</p>
        </div>
      </Container>
      <SocialIcons />
    </>
  );
}

export default App
