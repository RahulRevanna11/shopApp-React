import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="App">
    
        <div className='bg-slate-900'>
        <Navbar/> 
        </div>


     <div>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/cart" element={<Cart/>}/>
           </Routes>


     </div>
     </div>
  );
}

export default App;
