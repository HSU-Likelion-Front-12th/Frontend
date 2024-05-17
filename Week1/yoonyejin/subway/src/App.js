import Header from "./components/Header";
import Nav from "./components/Nav";
import MainSection from "./components/MainSection";
import MenuSection from "./components/MenuSection";

function App() {
  return (
    <>
    <header>
      <Header />
    </header>

    <nav>
      <Nav />
    </nav>

    <section>
      <MainSection />
    </section>

    <section>
      <MenuSection />
    </section>
    </>
  );
}

export default App;
