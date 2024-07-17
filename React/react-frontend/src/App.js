// import './App.css';
import First from "./components/first"
import { Second1, Second2 } from "./components/second";
import { MyRoutes } from "./MyRoutes";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
    {/* <Homepage/> */}
    <MyRoutes/> 
    {/* <h2>Welcome to the website</h2> */}
    </div>
  );
}

export default App;
