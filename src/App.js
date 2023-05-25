import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Users from './user/pages/Users'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/places/new' exact>
          <NewPlace />
        </Route>
        <Redirect to='/' />
      </Switch>
    </main>
   
  </Router>
}

export default App;
