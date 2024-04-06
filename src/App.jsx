import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Changed import
import './App.css';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create';
import Update from './Components/Update/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
