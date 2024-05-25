import React,{useEffect,useState} from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom';
// import } from 'react-router-dom'

function UpdateProduct( ) {
  const[data, setData] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  let {id} =useParams();

  async function fetchData() {
    let result =await fetch("http://localhost:8000/api/update/"+id);
    result = await result.json();
     setData(result[[0]]);
    }

   async function handleUpdate(id) {
     let formData = new FormData();
     formData.append('name',name);
     formData.append('price',price);
     formData.append('description',description);
     formData.append('file_path',file);

      let result = await fetch("http://localhost:8000/api/updateproduct/"+id,{
        method:"PUT",
        body : formData,
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      });
      result=await  result.json();
      console.warn("result",result);
      alert("data updated successfully");
    }
 
  useEffect(() => {
    fetchData( );
  },[]);

   return (
    <div>
      <Header/>
        <div className='col-sm-6 offset-sm-3'>
       <h2>Update Product</h2>
       <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={data.name}   className='form-control'></input><br/>
       <input type="text"  onChange={(e) => setPrice(e.target.value)} defaultValue={data.price} className='form-control'></input><br/>
       <input type="text"  onChange={(e) => setDescription(e.target.value)} defaultValue={data.description} className='form-control'></input><br/>
       <input type='file'  onChange={(e) => setFile(e.target.files[0])} defaultValue={data.file_path} className='form-control'></input><br/><br/>
       <img src={"http://localhost:8000/"+data.file_path} alt='productimage' width={270} height={240}/><br/><br/>
       <button onClick={() => handleUpdate(data.id)} className='btn btn-primary'>update</button>
       </div>
    </div>
  )
}

export default UpdateProduct
