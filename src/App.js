import { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Plan from "./components/plan/Plan";
import Program from "./components/programs/Program";
import Reason from "./components/reason/Reason";
import Testinomial from "./components/testinomials/Testinomial";

export const MenuContext = createContext();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen=(e)=> {
    if(e.target.closest('.header-bar')){
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <MenuContext.Provider value={{menuOpen, setMenuOpen}}>
      <div className="App" onClick={handleMenuOpen}>
        <Hero />
        <Program />
        <Reason />
        <Plan />
        <Testinomial />
        <Footer />
      </div>
    </MenuContext.Provider>
  );
}

export default App;
