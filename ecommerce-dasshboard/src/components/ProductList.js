import React,{useState, useEffect} from 'react'
import Header from './Header'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function ProductList() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    async function fetchData () {
        let result = await fetch("http://localhost:8000/api/list");
        result =await result.json();
        setData(result);
        // console.warn("result",result)
    }

    async function handleDelete(id) {
        await fetch("http://localhost:8000/api/delete/"+id,{
            method:"DELETE"
        });
        fetchData();
        
     }

    useEffect(  () => {

        fetchData();
    },[]);

    // function handleUpdateRoute(id) {
    //     // navigate("/update/:{id}");
    //     <Link to="/update/:id"></Link>
    // }

   return (
    <div>
        <Header/>
       <h1> Product List</h1>
       <div className='col-sm-8 offset-sm-2'>
       <Table responsive="sm">
        <thead>
          <tr>
            <th> Name </th>
            <th>Price </th>
            <th>Description </th>
            <th>Image </th>
            <th>Operations</th>
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
                    <td><img src={"http://localhost:8000/"+item.file_path} alt='img' style={{width:100, height:70}}/></td>
                     <td><button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Delete</button>
                        <Link to={"update/"+item.id}>
                          <button   className='btn btn-info'>Update</button>
                        </Link>
                      </td>
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

export default ProductList