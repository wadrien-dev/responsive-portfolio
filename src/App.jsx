import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <main>
        <Banner />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;