import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/ContactPage';

function App() {

  return (
    <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/resume" element={<ResumePage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
