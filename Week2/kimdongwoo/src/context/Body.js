import { useContext } from "react"
import { UserContext } from "./UserContext"
import { DisplayContext } from "./DisplayContext"

export default function Body() {
  const { isDark } = useContext(DisplayContext);
  const UserName = useContext(UserContext);
  return (
    <div className="body" style={{ backgroundColor: isDark ? "black" : "violet", color: isDark ? "white" : "yellow" }}><h1>{UserName}BODY</h1></div>
  )
}