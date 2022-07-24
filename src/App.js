import "./App.css";
import Link from "./Component/Link";
import Adresse from "./Component/Profolio/Adresse";
import FullName from "./Component/Profolio/FullName";
import ProfolioPhoto from "./Component/Profolio/ProfolioPhoto";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <div className="App">
        <ProfolioPhoto />
        <div className="Identification">
          <FullName />
          <Adresse />
        </div>
        <div className="linkedin">
          <Link />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
