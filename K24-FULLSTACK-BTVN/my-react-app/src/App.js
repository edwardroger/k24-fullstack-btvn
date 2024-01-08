import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Products from './pages/Products';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <BrowserRouter>
      <div>
      <Topbar />
      <Header />
        <Routes>
        <Route path='' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/register' element={<Register />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
