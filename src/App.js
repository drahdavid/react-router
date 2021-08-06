import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AllQuotes from './pages/AllQuotes';
import SingleQuote from './pages/SingleQuote';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import AuthPage from './pages/AuthPage';

import Layout from './components/layout/Layout';
import useHttp from './hooks/use-http';
import { getAllQuotes } from './lib/api';




function App() {
  const { pathname } = useLocation();

  const [quotes, setQuotes] = useState([]);

  const { sendRequest, data: loadedQuotes } = useHttp(getAllQuotes, true)

  useEffect(() => {
    sendRequest();

  }, [sendRequest, pathname]);

  useEffect(() => {
    setQuotes(loadedQuotes);

  }, [loadedQuotes]);


  return (
    <Layout>
      <Switch>

        <Route path='/login'>
          <AuthPage />
        </Route>

        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes allQuotes={!quotes ? [] : quotes} />
        </Route>

        <Route path="/quotes/:quoteId" >
          <SingleQuote allQuotes={!quotes ? [] : quotes} />
        </Route>

        <Route path="/new-quote" >
          <NewQuote />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
