import "./styles.css";
import Titles from "../Titles";
import Text from "../Text";


function Card({ img, heading, text, children }) {
  return (
    <div className="card-container">
      <img className="card-image" src={img} />
      <Titles fontFamily="Roboto Mono" fontSize={20}>{heading}</Titles>
      <Text fontFamily="DM Sans" color="#AEAEAE" fontSize={14}>
        {text} {children}
      </Text>
  
    </div>
  );
}

export default Card;
