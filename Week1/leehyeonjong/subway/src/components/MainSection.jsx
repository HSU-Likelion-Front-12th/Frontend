import background from "../images/main.png";
function MainSection() {
  return <img src={background} style={imgStyle} />;
}
export default MainSection;

const imgStyle = {
  display: "flex",
  width: "100vw",
  height: "45vh",
};
