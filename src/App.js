
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
  
   <Navbar/>
   <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/smartphones' element={<ShopCategory banner={men_banner} category="smartphones"/>}/>
    <Route path='/android' element={<ShopCategory banner={women_banner} category="android"/>}/>
    <Route path='/apple' element={<ShopCategory banner={kid_banner} category="apple"/>}/>
    <Route path="product" element={<Product/>}>
      <Route path=":productId" element={<Product/>}/>

    </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignup/>}/>
   </Routes>
    <Footer/>
   </BrowserRouter>
    </div>
  );
}

export default App;
