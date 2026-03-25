import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar /> {/* Isso é um componente */}
      <Hero />
      <section id="sobre">
        <h2> Sobre</h2>
        <p> Somos Referência em Hotelaria de Luxo.</p>
      </section>
      <Footer />
    </>
  );
}

export default App;
