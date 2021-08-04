import { Route, NavLink, Switch, Redirect, useRouteMatch } from 'react-router-dom'

import AllQuotes from './pages/AllQuotes';
import SingleQuote from './pages/SingleQuote';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

const ALL_QUOTES = [{
  id: 1, author: 'Somebody', text: 'Some Text'
},
{
  id: 2, author: 'Somebody 2 ', text: 'Some Text 2 '
},
{
  id: 3, author: 'Somebody 3', text: 'Some Text 3'
}];

function App() {



  return (
    <Layout>
      <Switch>
        <Route path="/" exact>

          <Redirect to="/quotes">
          </Redirect>

        </Route>

        <Route path="/quotes" exact>
          <AllQuotes allQuotes={ALL_QUOTES} />
        </Route>

        <Route path="/quotes/:quoteId" >
          <SingleQuote allQuotes={ALL_QUOTES} />
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
