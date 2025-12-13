import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import  Home  from "./Home";
import About from "./About"
function App() {
  return (
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
