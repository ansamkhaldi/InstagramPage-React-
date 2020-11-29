import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Home from './pages/Home';
import Live from './pages/Live';
import Notification from './pages/Notification';
import Logout from './pages/Logout';
import Setting from './pages/Setting';
import Message from './pages/Message';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar className="sidebarDes" />
        {/* </Router> */}
        <div className="Body">
          <Header className="headerDes" />
          {/* <Router> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route exact path="/Live" component={Live}></Route>
            <Route exact path="/Message">
              <Message />
            </Route>
            <Route exact path="/Notification">
              <Notification />
            </Route>
            <Route exact path="/Settings">
              <Setting />
            </Route>
            <Route exact path="/Logout">
              <Logout />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
