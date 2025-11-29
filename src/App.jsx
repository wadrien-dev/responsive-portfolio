import logo from './assets/img/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./components/NavigationBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    /*<div style={{ textAlign: 'center', paddingTop: '4rem'}}>
      <h1>Hello Adrien!</h1>
      <p>If you see this, it is working.</p>
    </div>*/
    
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills /> 
      <Projects />
      <Contact />  
      <Footer />
    </div>
  );
}

export default App;
