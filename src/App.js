import React from 'react';
import Home from './pages/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Redirect exact path={'/'} to="/list/1" />
        <Route path={'/list/:pageId/'} component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
