import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Blogs from './pages/Blogs/Blogs';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="">

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="checkout/:serviceID" element={<Checkout></Checkout>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
