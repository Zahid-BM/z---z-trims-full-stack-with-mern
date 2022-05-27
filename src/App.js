import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import '../src/Pages/common.css';
import { Route, Routes } from 'react-router-dom';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/purchase/:id' element={<Purchase />}></Route>
      </Routes>
    </div>
  );
}

export default App;
