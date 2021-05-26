import React from "react";
import './App.css';
import BackGroundProperty from "./components/1_BackGroundProperty/BackGroundProperty";
import OutLineProperty from "./components/2_OutLineProperty/OutLineProperty"
import TextFormatting from "./components/3_TextFormatting/TextFormatting";
import PositionConcept from "./components/4_PositionConcept/PositionConcept";
import DisplayProperty from "./components/5_DisplayProperty/DisplayProperty";
import FlexBoxConcept from "./components/6_FlexBoxConcept/FlexBoxConcept";
import BootstrapDemo from "./components/7_BootstrapDemo/BootstrapDemo";
function App() {
  return (
    <div className="App">
        {/*
        css, bootstrap, scss, library,
        */}
      {/*<BackGroundProperty/>*/}
      {/*  <OutLineProperty/>*/}
      {/*  <TextFormatting/>*/}
      {/*  <PositionConcept/>*/}
        {/*<DisplayProperty/>*/}
        <FlexBoxConcept/>
        <BootstrapDemo/>
    </div>
  );
}

export default App;
