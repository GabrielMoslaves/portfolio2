import "./styles.css";
import Titles from "../Titles";
import Text from "../Text";
import Button from "../Buttons";

function Card({ img, heading, text }) {
  return (
    <div className="card-container">
      <img className="card-image" src={img} />
      <Titles fontFamily="Roboto Mono" fontSize={20}>{heading}</Titles>
      <Text fontFamily="DM Sans" color="#AEAEAE" fontSize={14}>
        {text}
      </Text>
      <div className="card-buttons">
        <Button className="first-button" backgroundColor='#04D361' color='#0E091B'  fontWeight={400}> SITE </Button>
        <Button className="second-button"  fontWeight={400}> REPOSITÓRIO </Button>
      </div>
    </div>
  );
}

export default Card;
