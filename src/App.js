import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Creation from "./routes/Creation";
import Location from "./routes/Location";
import Security from "./routes/Security";
import System from "./routes/System";
import Info from "./routes/Info";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="/location" element={<Location />} />
        <Route path="/security" element={<Security />} />
        <Route path="/system" element={<System />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
