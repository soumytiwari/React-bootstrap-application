import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

// props: the information that we would change when using, should not keep changing in the main component file.
// Value defined while using it.
function App() {

  const appStyles = {
    backgroundColor: "Gray",
    color: "Black",
  };

  return (
    <>
      <div style={appStyles}>
        <Navbar
          title="Navbar_Text_Utils"
          info="About Utils"
        />
        {/* <Navbar/> */}
        <div className="stateLearn_container my-3 mx-5">
          <TextForm
            heading="Write here, write here <3"
            btn_cap="Click to convert to UpperCase"
            btn_low="Click to convert to LowerCase"
          />
        </div>
        <div className="darkMode">
          <About/>
        </div>
      </div>
    </>
  );
}

export default App;

// {/* background-color: #282c34 */ }
