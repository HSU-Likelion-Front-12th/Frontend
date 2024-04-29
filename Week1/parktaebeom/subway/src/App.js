import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainSection from "./components/Mainsection";
import MenuSection from "./components/MenuSection";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <nav>
        <Nav></Nav>
      </nav>

      <section>
        <MainSection></MainSection>
      </section>

      <secton>
        <MenuSection></MenuSection>
      </secton>
    </>
  );
}

export default App;
