import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// props: the information that we would change when using, should not keep changing in the main component file.
// Value defined while using it.
function App() {
  // state, here for callback to handle search operation using both navbar and textform .js
  const [searchText, setSearchText] = useState("");
  const [text, setText] = useState("");

  const handleSearchTextChange = (newSearchText) => {
    setSearchText(newSearchText);
  };

  const handleTextChange = (newText) => {
    setText(newText);
  };

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
          searchText={searchText}
          text={text}
        />
        {/* <Navbar/> */}
        <div className="stateLearn_container my-3 mx-5">
          <TextForm
            heading="Write here, write here <3"
            btn_cap="Click to convert to UpperCase"
            btn_low="Click to convert to LowerCase"
            onSearchTextChange={handleSearchTextChange}
            onTextChange={handleTextChange}       //  pass the callback to update text
          />
        </div>
      </div>
    </>
  );
}

export default App;

// {/* background-color: #282c34 */ }
