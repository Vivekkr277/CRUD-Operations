import './App.css';
// import {Button} from 'react-bootstrap';
// import Header from './components/Header'
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct';
import Login from './components/Login';
import Register from './components/Register';  
import Protected from './components/Protected';
import ProductList from './components/ProductList'
import SearchProduct from './components/SearchProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      {/* <Header/> */}
        <Routes>
        <Route path="/add" element={<Protected Cmp={AddProduct}/>}></Route> 
        <Route path="/update/:id" element={<Protected Cmp={UpdateProduct}/>}/>
        <Route path='/search' element={<Protected Cmp={SearchProduct}/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> 
        <Route path='/' element={<Protected Cmp={ProductList}/>}></Route>
       </Routes>

      </BrowserRouter>
             

    </div>
  );
}

export default App;
