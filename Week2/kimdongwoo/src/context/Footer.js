import { UserContext } from "./UserContext";
import { DisplayContext } from "./DisplayContext";
import { useContext, useState } from "react"

export default function Footer() {

  const { isDark, setIsDark } = useState();

  const toggleDisplay = () => {
    setIsDark(!isDark);
  }

  return (
    <Footer className="header" style={{ backgroundColor: isDark ? "violet" : "black", color: isDark ? "yellow" : "white" }}><h1>HEADER</h1>
      <button onClick={toggleDisplay}>Switch</button>
    </Footer>
  )
}