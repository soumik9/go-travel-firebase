import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="">

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

    </div>
  );
}

export default App;
