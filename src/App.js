import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../src/components/Navbar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route path='/category/:categoryId'>
            <ItemListContainer />
          </Route>
          <Route path='/detail/:paramId'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
