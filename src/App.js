import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GithubState from './contexts/github/GithubState';
import AlertState from './contexts/alert/AlertState';
import Navbar from '../src/components/layout/Navbar';
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import NotFound from "../src/components/pages/NotFound";
import User from "../src/components/users/User";


function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;