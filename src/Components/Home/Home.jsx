import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteuser } from '../../Services/Reducer/User.reducer';

function Home() {

  
  const dispatch = useDispatch();

  const users  = useSelector((state)=>state.users);
  console.log(users);
  
  const handleDelete = (id)=>{
    
    dispatch(deleteuser({id : id }));

  }





  return (

    <div className='container'>
        <h3 className='text-center text-primary mt-4'>CRUD with Redux </h3>
        <Link to={'/create'} className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                  <th>NO</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Offer</th>
                  <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                users.map((user , index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{user.title}</td>
                    <td>{user.price}</td>
                    <td>{user.offpr}</td>
                    <td>
                        <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                        <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                    </td>

                  </tr>
                ))
              }
            </tbody>

        </table>

    </div>

  )
}

export default Home