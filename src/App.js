import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PhoneDetailComponent from './components/PhoneDetailComponent/PhoneDetailComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/phones/:id">
              <PhoneDetailComponent></PhoneDetailComponent>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
