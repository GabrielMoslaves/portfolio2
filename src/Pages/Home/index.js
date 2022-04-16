import Header from "./Header";
import Presentation from "./Presentation";
import Projects from "./Projects";
import "./styles.css"

function Home() {
  return (
    <div className="home-page">
      <Header/>
      <Presentation/>
      <Projects/>
    </div>
  );
}

export default Home;
