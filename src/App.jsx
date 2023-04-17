
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import PizzaProvider from './components/context/PizzaProvider';
import NotFound from './pages/NotFound'
import Pizzas from './pages/Pizzas';
import Cart from './pages/Cart';



const App = () => {
    
  return (
    <PizzaProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pizzas' element={<Pizzas />}></Route>
          <Route path='detalles/:id' element={<Details />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </PizzaProvider>
  )
}

export default App