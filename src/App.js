import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../src/components/Navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart'

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
          <Route path='/item/:paramId'>
            <ItemDetailContainer />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
