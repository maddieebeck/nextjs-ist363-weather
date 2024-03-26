const colors = [
  {
    name: "Red",
    value: "#ff0000",
  },
  {
    name: "Green",
    value: "#00ff00",
  },
  {
    name: "Blue",
    value: "#0000ff",
  },
];

const ColorPicker = () => {
  return (
    <div
      style={{
        backgroundColor: colors[0].value,
      }}
    >
      Color picker
    </div>
  );
};
export default ColorPicker;
