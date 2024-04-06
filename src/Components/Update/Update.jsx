import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../../Services/Reducer/User.reducer';

function Update() {

    const {id} = useParams();
    const users  = useSelector((state)=>state.users);
    const existinguser = users.filter(f=> f.id == id);
    const{image , title , price , offpr , description} = existinguser[0];

    const [uimage ,setImage] = useState(image);
    const [utitle ,setTitle] = useState(title);
    const [uprice ,setPrice] = useState(price);
    const [uoffpr ,setOffpr] = useState(offpr);
    const [udescription ,setDescription] = useState(description);

    const dispatch = useDispatch();
    const navigate = useNavigate();


  const handleUpdate =(e)=>{
     
    e.preventDefault();

    dispatch(updateuser({

      id : id,
      image : uimage,
      title : utitle,
      price : uprice,
      offpr : uoffpr,
      description : udescription

    })),
    navigate('/')

  }

  return (
    <div className='d-flex w-100  justify-content-center align-items-center mt-5'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h2 className='mb-5 text-center'>Update Product</h2>
      <form onSubmit={handleUpdate}>
      <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" value={utitle} onChange={e => setTitle(e.target.value)}/>
        </div>
        
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image:</label>
          <input type="text" className="form-control" id="image" value={uimage} onChange={e => setImage(e.target.value)} />
        </div>
       
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="text" className="form-control" id="price" value={uprice} onChange={e => setPrice(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="off-price" className="form-label">Off Percentage:</label>
          <input type="text" className="form-control" id="offpr" value={uoffpr} onChange={e => setOffpr(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <input type="text" className="form-control" id="description" value={udescription} onChange={e => setDescription(e.target.value)}/>
        </div>
        <button type="submit" className='btn btn-info'>Update</button>
      </form>
    </div>
  </div>
  
  )
}

export default Update