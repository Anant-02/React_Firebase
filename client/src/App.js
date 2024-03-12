import './App.css';
import Login from './components/Login';
import Testing from './components/Testing';
import Register from './components/Register';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Login/>}></Route>
          <Route exact path = "/register" element={<Register/>}></Route>
          <Route exact path = "/reset" element={<Reset/>}></Route>
          <Route exact path = "/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
