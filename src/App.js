import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import '../src/Pages/common.css';

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Home></Home>

    </div>
  );
}

export default App;
