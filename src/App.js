import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting='Welcome to Domestic Punk Skates 🤟'/>
      </header>
    </div>
  );
}

export default App;
