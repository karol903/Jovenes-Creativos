import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sobre_nosotros, Sing_in, Sing_up, Home, Contactanos} from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre_nosotros" element={<Sobre_nosotros />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/sing_in" element={<Sing_in />} />
        <Route path="/sing_up" element={<Sing_up />} />
      </Routes>
    </div>
  );
}

export default App;
