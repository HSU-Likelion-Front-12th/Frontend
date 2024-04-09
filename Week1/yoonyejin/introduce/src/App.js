import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";
import HobbySection from "./components/HobbySection";

const section={
  backgroundColor:"#f3f5ff",
  width : "100vw"
}

function App() {
  return (
    <>
    <header>
      <Header />
    </header>

    <section>
      <MainSection />
    </section>

    <section style={section}>
      <AboutSection />
      <HobbySection/>
    </section>
    </>
  );
}

export default App;
