import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NewsPage from './Pages/NewsPage';
import ProductList from './Pages/ProductList';
import CounterPage from './Pages/CounterPage';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="about" element={<AboutPage />}/>
          <Route path="/news" element={<NewsPage />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/counter" element={<CounterPage />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
