import Text from "../../../Components/Text";
import Titles from "../../../Components/Titles";
import "./styles.css";

function Presentation() {
  return (
    <div className="presentation-container">
      <Text color="#04D361" fontFamily="IBM Plex Mono" >
        GABRIEL MOSLAVES DE CARVALHO
      </Text>
      <Titles>
        Projetos concluídos<br/> como  desenvolvedor Front-End
      </Titles>
      <Text fontFamily="DM Sans, sans-serif" color="#AEAEAE">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
        ligula, accumsan nec cursus in, eleifend sit amet dui.
      </Text>
    </div>
  );
}

export default Presentation;
