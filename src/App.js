import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Home from './components/pagesComponent/HomeComponents/Home';
import Live from './components/pagesComponent/LiveComponent/Live';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebarDes" />
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Live" component={Live} />
        </Switch>
      </Router> */}
      <div className="Body">
        <Header className="headerDes" />
        <Home />
      </div>
    </div>
  );
}

export default App;
