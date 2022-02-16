import "./App.css";
import react from "react";
import { DrumPad } from "./Components/DrumPad";

function App() {
  const [display, setDisplay] = react.useState("");
  const [volume, setVolume] = react.useState(0.5);

  const drumPadInfo = [
    {
      id: "Heater-1",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      buttonText: "Q",
    },
    {
      id: "Heater-2",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      buttonText: "W",
    },
    {
      id: "Heater-3",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      buttonText: "E",
    },
    {
      id: "Heater-4",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      buttonText: "A",
    },
    {
      id: "Clap",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      buttonText: "S",
    },
    {
      id: "Open HH",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      buttonText: "D",
    },
    {
      id: "Kick n' Hat",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      buttonText: "Z",
    },
    {
      id: "Kick",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      buttonText: "X",
    },
    {
      id: "Closed HH",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      buttonText: "C",
    },
  ];
  return (
    <div id="drum-machine" className="App">
      <div id="container">
        <DrumPad
          drumPadInfoArr={drumPadInfo}
          setDisplay={setDisplay}
          volume={volume}
        />
        <div>
          <div id="display">{display}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
