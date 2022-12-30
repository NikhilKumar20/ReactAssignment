import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './Base';
import DisplayAllBooks from './DisplayAllBooks';
import ContactUs from './ContactUs';

function App() {
  return (
    <Base>
      <BrowserRouter>

        <Routes>
          <Route path="displayallbooks" element={<DisplayAllBooks/>}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </Base>
  );
}

export default App;
