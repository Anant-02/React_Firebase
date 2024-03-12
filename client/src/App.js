import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
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
