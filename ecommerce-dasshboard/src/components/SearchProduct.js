import React,{useState} from 'react'
import Header from './Header'
import {Table} from 'react-bootstrap'


function SearchProduct() {

    const [data, setData] = useState([]);

   async function search(key) {
        let result =await fetch("http://localhost:8000/api/search/"+key);
        result = await result.json();
        setData(result);
    }

  return (
    <div>
        <Header/>
        <div className='col-sm-6 offset-sm-3'>
        <h1>SearchProduct</h1>
        <input type="text" onChange={(e) => search(e.target.value)} placeholder='search product by name' className='form-control'></input>
        <br/>
        <Table responsive="sm">
        <thead>
          <tr>
            <th> Name </th>
            <th>Price </th>
            <th>Description </th>
            <th>Image </th>
           </tr>
        </thead>
        <tbody>
         {
            data.map((item) => 
                (
                <tr>
                    <td>{item.name}  </td>
                    <td>{item.price}  </td>
                    <td>{item.description} </td>
                    <td><img src={"http://localhost:8000/"+item.file_path} alt='img' style={{width:100}}/></td>
                     
                 </tr>
                )
            )
         }
            
           </tbody>
        </Table>
        </div>
        
    </div>
  )
}

export default SearchProduct