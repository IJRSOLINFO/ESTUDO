//* Componente NAVBAR

import { useState, useEffect } from "react";
// useEffect é um hook que permite gerência dos efeitos colateraias.
//useState é a mudança de estado. Uma Alteração de estado da página. Inserção de dados.
import { FaHotel } from "react-icons/fa";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  //scrool é o estado normal | setScroll é a alteração.

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //Esse arrays vazio, significa que esse efeitos, vai rodar uma única vez.

  function scrollToSection(id) {
    document
      .getElementById(id)

      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={scroll ? "navbar active" : "navbar"}>
      <h1>
        {" "}
        <FaHotel /> Hotel Lux
      </h1>

      <ul>
        <li onClick={() => scrollToSection("sobre")}>Sobre</li>
        <li onClick={() => scrollToSection("cards")}>Quartos</li>
        <li onClick={() => scrollToSection("suporte")}>Suporte</li>
      </ul>
    </nav>
  );
}
