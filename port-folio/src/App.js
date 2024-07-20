import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { createBrowserRouter } from 'react-router-dom'
import MyRoutes from './MyRoutes';

function App() {
  return (
    <div className="App">
      <MyRoutes/>
    </div>
  );
}

export default App;
