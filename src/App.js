import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Accueil from './components/pages/acceuil';
import PageLegumes from './components/pages/page_legumes';
import Fruits from './components/pages/fruits';
import ShoppingCart from './components/pages/shopping-cart';
function App() {
  return (

    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
            <Route path="/accueil" element={<Accueil/>}/>
            <Route exact path="/page-legumes" element={<PageLegumes/>}/>
            
            <Route exact path="/fruits" element={<Fruits/>}/>
            <Route exact path="/shopping-cart" element={<ShoppingCart/>}/>

        </Routes>
        <Footer></Footer>
      </Router>

    </>
  );
}

export default App;
