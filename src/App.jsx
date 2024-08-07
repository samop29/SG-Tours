import { useState } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Cards from "./Cards";
import Slide from "./Slide";
import WorldMap from "./WorldMap";

function App() {
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="">
        <Header />
        <Home />
        {/* <Slide /> */}
        {/* <Cards /> */}
        {/* <WorldMap /> */}
      </div>
    </>
  );
}

export default App;
