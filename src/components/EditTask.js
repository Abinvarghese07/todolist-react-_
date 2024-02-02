import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {IoMdClose} from 'react-icons/io';


const EditTask = () => {
    const navigate = useNavigate()
    const {id} = useParams()



    const[user, setUser] = useState({
        title : 'title',
        description: "description"

    })
    const{title,description} = user


    
    const handleInput = (event) => {
        setUser({...user,[event.target.name]:event.target.value})
    }
    
    //Function to use Put method using axios
    const handleSubmit = async(event)=> {
        event.preventDefault()
        await axios.put(`https://todolist-backend-production-b4bd.up.railway.app/user/${id}`,user)
        navigate('/')

    }

    //Function to get data from backend
    const getData = async () => {
        const result = await axios.get('https://todolist-backend-production-b4bd.up.railway.app/users')
        console.log(result.data)
        setUser(result.data)
    }

            

      
    useEffect( () => {
        getData()

    },[])
    

    const handleClose = () => {
        navigate('/')
    }

    







    return (
        <div className='bg-heroBg h-screen flex justify-center'>
            <div className='flex justify-center font-poppins bg-outerBox w-[370px] h-[430px] rounded-2xl mt-[140px]'>
                <IoMdClose className='mt-5 cursor-pointer' onClick={handleClose}/>
          
                <form onSubmit={(event) => handleSubmit(event)} className='flex flex-col  p-8 '>
                    <h1 className='text-2xl font-medium text-slate-600 p-4 underline underline-offset-8'>Edit your Task!</h1>
                    <label className='text-xl text-slate-600 text-start p-2'>Edit your Title</label>
                    <input placeholder='title'  value={title} name='title' id='title' type='text' onChange={(event) => handleInput(event)} className='p-2 rounded-xl'></input>
                    <label className='text-xl text-slate-600 text-start p-2'>Edit your description</label>
                    <textarea rows={4} cols={4} placeholder='description' value={description}  id='description' name='description' type='text' onChange={(event) => handleInput(event)} className='p-2 rounded-xl'></textarea>
                    <button className='bg-red-100 rounded-2xl p-3 mt-3 text-semibold' type='submit'>Save Changes</button>

                </form>
            </div>
        </div>
    );
};

export default EditTask;