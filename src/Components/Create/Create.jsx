import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adduser } from '../../Services/Reducer/User.reducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [image ,setImage] = useState('');
    const [title ,setTitle] = useState('');
    const [price ,setPrice] = useState('');
    const [offpr ,setOffpr] = useState('');
    const [description ,setDescription] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users =useSelector((state)=>state.users);



    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

        dispatch(adduser({id :newId ,image , title,price,offpr,description}))
        navigate('/');
      };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center' >
        <div className='w-50 border bg-secondary text-white p-5'>
        <h1>Create New Product</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="image">Image:</label>
                <input type="text" id="image" value={image}  onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="off-price">Off Percentage </label>
                <input type="text" id="offpr" value={offpr} onChange={(e) => setOffpr(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="off-price">Description </label>
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button className='btn btn-info'>Create</button>
            </form>
        </div>
    </div>
  )
}

export default Create