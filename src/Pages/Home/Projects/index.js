import Card from "../../../Components/Card";
import "./styles.css";
import frontacademy from "../../../Images/frontacademy.png";
import gamerapp from "../../../Images/gamerapp.png";
import catalogofilmes from "../../../Images/catalogofilmes.png";
import Button from "../../../Components/Buttons";
import codelandia from "../../../Images/codelandia 4.png"

function Projects() {
  return (
    <div className="cards-container">
      <Card
        img={frontacademy}
        heading="Front Academy"
        text=" Curso de capacitação para desenvolvedores em react, react native, javascript, html, css e desenvolvimento frontend."
      >
        <div className="card-buttons">
          <Button href='https://www.frontacademy.com.br/' backgroundColor="#04D361" color="#0E091B" fontWeight={700}>
            SITE
          </Button>
          <Button fontWeight={700}>REPOSITÓRIO</Button>
        </div>
      </Card>

      <Card
        img={catalogofilmes}
        heading="Catálogo de Filmes"
        text="Catálogo que desenvolvi em React para
      treinar habilidades em HTML, CSS e JavaScript"
      >
        <div className="card-buttons">
          <Button href='https://catalogofilmes-mfwn16rhq-gabrielmoslaves.vercel.app/'backgroundColor="#04D361" color="#0E091B" fontWeight={700}>
            SITE
          </Button>
          <Button fontWeight={700}>REPOSITÓRIO</Button>
        </div>
      </Card>

      <Card
    
        img={gamerapp}
        heading="GamerApp"
        text="Plataforma interativa para compra e trade de jogos online, de forma simples e rápida."
      >
        <div className="card-buttons">
          <Button href='https://gamerapp.com.br/' backgroundColor="#04D361" color="#0E091B" fontWeight={700}>
            SITE
          </Button>
          <Button fontWeight={700}>REPOSITÓRIO</Button>
        </div>
      </Card>

      <Card
        img={codelandia}
        heading="Desafio 4 - Codelandia"
        text="Desafio numero 4 da Codelandia que desenvolvi para treinar habilidades em JavaScript e fundamentos de React Hooks"
      >
        <div className="card-buttons">
          <Button href='https://codelandia-desafio-4-ten.vercel.app/' backgroundColor="#04D361" color="#0E091B" fontWeight={700}>
            SITE
          </Button>
          <Button fontWeight={700}>REPOSITÓRIO</Button>
        </div>
      </Card>
    </div>
  );
}

export default Projects;
