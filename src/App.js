import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Addbook from './components/Addbook';
import About from './components/About';
import Books from './components/Book/books';
import BookDetail from './components/Book/BookDetail';
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<Addbook />} exact />
          <Route path='/books' element={<Books />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/books/:id' element={<BookDetail />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
