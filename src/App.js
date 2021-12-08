import { NavBar } from '../src/components/Navbar/NavBar';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { ItemListContainer } from './components/ItemList/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting='WELCOME TO DOMESTIC PUNK SKATES 🤟'/>
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
