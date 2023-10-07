import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  Choose,
  Experience,
  Trainers,
  Tesitmonials,
  CTA,
  Footer,
} from "./components";
import { useState } from "react";

const App = () => {
  const [active, setActive] = useState("");

  return (
    <BrowserRouter>
      <div className="background-hero w-full relative">
        <div className="h-full w-[80%] bg-gradient-to-r from-black opacity-[0.6467] z-40 to-transparent absolute" />
        <Navbar active={active} setActive={setActive} />
        <Hero />
      </div>
      <Choose />
      <Experience />
      <Trainers />
      <Tesitmonials />
      <CTA />
      <Footer active={active} setActive={setActive} />
    </BrowserRouter>
  );
};

export default App;
