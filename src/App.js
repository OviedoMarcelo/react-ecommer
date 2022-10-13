import './App.css';
import NavBar from './components/NavBar/NavBar';
/* import Button from './components/Button'; */
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (

    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListConteiner />} />
        <Route path='/category/:categoryId' element={<ItemListConteiner/>} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
