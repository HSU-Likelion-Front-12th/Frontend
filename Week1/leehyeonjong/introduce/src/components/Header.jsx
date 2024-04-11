import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <div style={headerStyle}>
      <Logo />
      <Nav />
    </div>
  );
}
export default Header;

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "120px",
};
