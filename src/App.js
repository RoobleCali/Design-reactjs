import Extentions from "./components/Extentions";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div>
      <div className="max-w-6xl space-y-14 mx-auto p-5">
        <Header />
        <Showcase />
        <Features />
        <Extentions />
      </div>
      <div className="space-y-14 p-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
