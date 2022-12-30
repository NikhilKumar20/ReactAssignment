import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBook from './AddBook';
import Display from './Display';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="addBook" element={<AddBook />}></Route>
        <Route path="display" element={<Display />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
