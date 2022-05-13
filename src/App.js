import "./App.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/Landing-Page/LandingPage";
import { Routes, Route, Link } from "react-router-dom";
import AboutSection from "./Components/About/About";




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/about" element={<AboutSection/>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
