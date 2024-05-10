import { UserContext } from "./UserContext"
import { DisplayContext } from "./DisplayContext"


export default function Header() {
  const { isDark } = UserContext(DisplayContext)
  return (
    <header className="header" style={{ backgroundColor: isDark ? "black" : "violet", color: isDark ? "white" : "yellow" }}><h1>HEADER</h1></header>
  )
}