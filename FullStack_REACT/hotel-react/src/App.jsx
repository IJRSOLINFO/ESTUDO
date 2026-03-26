import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

import Reserve from "./pages/Reserve.jsx";
// Para Criar as rotas temos que instalar o ROUTER  com o commando #npm install react-router-dom
function Home() {
  return (
    <>
      <Hero />
      <section id="sobre">
        <h2> Sobre</h2>
        <p>
          {" "}
          Seja bem-vindo ao Hotel Lux, onde sofisticação, conforto e
          exclusividade se encontram para proporcionar uma experiência
          inesquecível. Localizado em um cenário privilegiado, com vistas
          deslumbrantes e acesso facilitado aos principais pontos da região,
          nosso hotel redefine o conceito de hospitalidade de alto padrão. Cada
          detalhe do Hotel Lux foi cuidadosamente pensado para atender aos
          hóspedes mais exigentes. Nossas suítes espaçosas combinam design
          contemporâneo com elegância atemporal, oferecendo comodidades de
          última geração, enxovais premium e varandas privativas que convidam ao
          relaxamento. A experiência gastronômica é um dos nossos grandes
          destaques. Contamos com restaurantes refinados que exploram sabores
          internacionais e ingredientes selecionados, além de um serviço
          personalizado que transforma cada refeição em um momento único. Para o
          seu bem-estar, oferecemos um spa completo, piscina climatizada,
          academia moderna e áreas exclusivas para descanso e lazer. Nosso
          atendimento é marcado pela excelência, com uma equipe altamente
          treinada pronta para antecipar suas necessidades e proporcionar um
          serviço impecável. Seja para uma viagem de lazer ou negócios, o Hotel
          Lux é o destino ideal para quem busca requinte, conforto e
          experiências memoráveis. Hotel Lux – Onde o luxo se torna
          experiência..
        </p>
      </section>
      <Cards />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar /> {/* Isso é um componente */}
      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/reserve" element={<Reserve />} />
     
      </Routes>
    </>
  );
}

export default App;
