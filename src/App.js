import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Iam from "./component/Iam";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Routes>
        <Route path="/iam" element={<Iam/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
