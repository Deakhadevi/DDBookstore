import './App.css';
 import Signup from './component/Signup';
 import Login from './component/Login';

// import Dashboard from './component/Dashboard';

import {

  Routes,
  Route,

} from "react-router-dom";
import Bookmanage from './component/Booksmanage';
function App() {
  return (

    <Routes>


     <Route element={<Bookmanage/>} path="/bookmanage" />
     <Route element={<Signup/>} path="/signup" />
      <Route element={<Login />} path="/" />
       {/* <Route element={<Dashboard />} path="/dashboard" /> */}
      </Routes>

  );
}

export default App;
