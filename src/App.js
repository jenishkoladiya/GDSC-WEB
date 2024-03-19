import logo from './logo.svg';
import './App.css';
import Text from './components/Text';
import Profile from './screens/Profile';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='flex justify-center items-center h-screen bg-blue-100'>
      {/* login */}
      {/* register */}

      {/* rout==/Register<Register /> */}
      {/* rout== /login <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
