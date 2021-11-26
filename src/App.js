import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting='WELCOME TO DOMESTIC PUNK SKATES 🤟'/>
      </header>
    </div>
  );
}

export default App;
