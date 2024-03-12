import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" Component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
