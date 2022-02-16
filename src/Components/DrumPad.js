import { DrumPadButton } from "./DrumPadButton";
import react from "react";

export const DrumPad = (props) => {
  const { drumPadInfoArr, setDisplay, volume } = props;
  react.useEffect(() => {
    document.addEventListener("keydown", function (event) {
      switch (event.key) {
        case "q": {
          const { audioLink, id } = drumPadInfoArr[0];
          uberPlaySound(audioLink, id);
          break;
        }
        case "w": {
          const { audioLink, id } = drumPadInfoArr[1];
          uberPlaySound(audioLink, id);
          break;
        }
        case "e": {
          const { audioLink, id } = drumPadInfoArr[2];
          uberPlaySound(audioLink, id);
          break;
        }
        case "a": {
          const { audioLink, id } = drumPadInfoArr[3];
          uberPlaySound(audioLink, id);
          break;
        }
        case "s": {
          const { audioLink, id } = drumPadInfoArr[4];
          uberPlaySound(audioLink, id);
          break;
        }
        case "d": {
          const { audioLink, id } = drumPadInfoArr[5];
          uberPlaySound(audioLink, id);
          break;
        }
        case "z": {
          const { audioLink, id } = drumPadInfoArr[6];
          uberPlaySound(audioLink, id);
          break;
        }
        case "x": {
          const { audioLink, id } = drumPadInfoArr[7];
          uberPlaySound(audioLink, id);
          break;
        }
        case "c": {
          const { audioLink, id } = drumPadInfoArr[8];
          uberPlaySound(audioLink, id);
          break;
        }
      }
    });
  }, []);
  let uberPlaySound = (audioLink, id) => {
    const drumAudio = new Audio(audioLink);
    drumAudio.volume = volume;
    console.log(volume);
    drumAudio.play();
    setDisplay(id);
  };
  return (
    <div id="drum-pad-container">
      {drumPadInfoArr.map(({ id, audioLink, buttonText }) => {
        return (
          <DrumPadButton
            id={id}
            onClick={() => uberPlaySound(audioLink, id)}
            buttonText={buttonText}
          />
        );
      })}
    </div>
  );
  //   return <DrumPadButton id={DrumPadInfoArr.map()} onClick={playSound} buttonText="Q" />;
};
