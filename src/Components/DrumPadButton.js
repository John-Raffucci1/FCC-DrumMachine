export const DrumPadButton = (props) => {
  const { id, onClick, buttonText } = props;
  return (
    <button id={id} className="drum-pad" onClick={onClick}>
      {buttonText}
    </button>
  );
};
