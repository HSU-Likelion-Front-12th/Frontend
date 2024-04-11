import logo from "../images/logo.png";
function Logo() {
  return <img src={logo} style={logoStyle} />;
}
export default Logo;

const logoStyle = {
  width: "340px",
  height: "fit-content",
  marginLeft: "300px",
};
