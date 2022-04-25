import Header from "./Components/Header/Header";
import LandingPage from "./Components/Landing-Page/LandingPage";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
