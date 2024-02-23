import './App.css';
import Navbar from './components/Navbar';

// props: the information that we would change when using, should not keep changing in the main component file. 
// Value defined while using it.
function App() {
  return (
    <>
      <Navbar title="Navbar_Text_Utils" info="About Utils"/>
      {/* <Navbar/> */}
    </>
  );
}

export default App;

// {/* background-color: #282c34 */ }