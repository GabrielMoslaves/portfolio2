import Card from "../../../Components/Card";
import "./styles.css";
import frontacademy from "../../../Images/frontacademy.png";
import gamerapp from "../../../Images/gamerapp.png"
import catalogofilmes from "../../../Images/catalogofilmes.png"

function Projects() {
  return (
    <div className="cards-container">
      <Card
        img={frontacademy}
        heading="Front Academy"
        text=" Curso de capacitação para desenvolvedores em react, react native, javascript, html, css e desenvolvimento frontend."
      />
       <Card
        img={catalogofilmes}
        heading="Catálogo de Filmes"
        text="Catálogo que desenvolvi em React para treinar habilidades em HTML, CSS e JavaScript"
      />
      <Card
        img={gamerapp}
        heading="GamerApp"
        text="Plataforma interativa para compra e trade de jogos online, de forma simples e rápida."
      />
      <Card
        img={frontacademy}
        heading="Front Academy"
        text=" Curso de capacitação para desenvolvedores em react, react native, javascript, html, css e desenvolvimento frontend"
      />
    </div>
  );
}

export default Projects;
