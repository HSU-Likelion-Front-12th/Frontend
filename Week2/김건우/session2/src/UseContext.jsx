import './UseContext.css';

export default function Page(){
    return(
        <div>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    )
}

function Header() {
    return (
        <header className="header" style={{backgroundColor: isDark ? "black" : "violet",color: isDark ? "white" : "yellow"}}>
            <h1>HEADER</h1>
        </header>
        )
    }


function Body() {
  return (
    <div className="body" style={{ backgroundColor: isDark ? "black" : "violet", color: isDark ? "white" : "yellow" }}>
        <h1>BODY</h1>
    </div>
  )
}

