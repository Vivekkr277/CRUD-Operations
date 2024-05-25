import React,{useState} from 'react'
import Header from './Header'

function AddProduct() {

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function handleUpdate() {
    // console.warn(name, file, price, description);
    let formData = new FormData();
    formData.append('file_path',file);
    formData.append('name',name);
    formData.append('price',price);
    formData.append('description', description);

     let result =await fetch("http://localhost:8000/api/addproduct",{
      method:"POST",
      body:formData
     });  
     result = await result.json();
     console.warn("result",result);
     alert("data addedd successfully");
  }

  return (
    <div>
    <Header/>
      <div className='col-sm-6 offset-sm-3'>
    <h2>Add Product</h2>
      <input type='text' onChange={(e) => setName(e.target.value)} placeholder='  name' className='form-control'/><br/>
      <input type='file' onChange={(e) => setFile(e.target.files[0])} placeholder='file' className='form-control'/><br/>
      <input type='text' onChange={(e) => setPrice(e.target.value)}  placeholder='price' className='form-control'/><br/>
      <input type='text' onChange={(e) => setDescription(e.target.value)} placeholder='description' className='form-control'/><br/><br/>
      <button onClick={handleUpdate} className='btn btn-primary'>Add Product</button>
    </div>
  </div>
  )
}

export default AddProduct
