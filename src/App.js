import './App.css';
import NavBar from './components/NavBar';
/* import Button from './components/Button'; */
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (

    <div className='App'>
      <NavBar />
      <ItemListConteiner gretting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
