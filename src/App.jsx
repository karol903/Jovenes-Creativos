import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sing_in, Sing_up, Home} from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sing_in" element={<Sing_in />} />
        <Route path="/sing_up" element={<Sing_up />} />
      </Routes>
    </div>
  );
}

export default App;
