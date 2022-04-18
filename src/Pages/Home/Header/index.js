import Button from "../../../Components/Buttons";
import Logoimg from "../../../Components/Logo";
import "./styles.css";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="header-left">
          <Logoimg />
        </div>
        <div className="header-right">
          <Button
            className="github-button"
            href="https://github.com/GabrielMoslaves"
            fontWeight={600}
          >
            MEU GITHUB
          </Button>
          <Button
            className="site-button"
            backgroundColor="#04d361"
            color="black"
            fontWeight={600}
          >
            ENTRAR NO SITE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
