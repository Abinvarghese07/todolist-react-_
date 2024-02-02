import React, { useState } from 'react';
import {IoMdAdd} from 'react-icons/io';
import axios from 'axios';
import Cards from './Cards';
import {IoMdClose} from 'react-icons/io';


const Homepage = () => {


    const[user, setUser] = useState({
        title : 'title',
        description: "description"

    })

    const{title,description} = user
    
    //Spread operator for onChange={}
    const handleInput = (event) => {
        setUser({...user,[event.target.name]:event.target.value})
    }
    
    //Function to post data using axios
    const handleSubmit = async(event)=> {
        event.preventDefault()
        await axios.post('https://todolist-backend-production-a1a8.up.railway.app/user',user)

    }
    
    const handleReload = () => {
        window.location.reload ();
        };


  





    

    return (
        <div className=''>
            <div className='font-poppins flex flex-col items-center md:px-[120px] mt-[60px] mb-10 md:items-start gap-5 '>
                <h1 className='text-5xl text-center md:text-5xl font-medium underline underline-offset-8 text-slate-600' >ToDo List.</h1>
                <div className='flex justify-center items-center gap-3 p-1 font-sm hover:text-indigo-800  mt-2 '>
                    <IoMdAdd className='text-xl text-indigo-400 hover:rounded-full hover:bg-indigo-200'/>
                         
                        <button className="btn text-lg text-slate-600" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Task</button>
                        <dialog id="my_modal_1" className="modal rounded-2xl border border-slate-800" >
                        <div className=" flex  flex-col  rounded-2xl w-[370px] h-[440px] p-4  bg-outerBox">
                            <form method="dialog" >
                            <button className='flex text-xl'><IoMdClose/></button>
                               
                            </form>
                            <h3 className="font-md p-3 text-2xl text-slate-600 underline underline-offset-8 ">Add Task</h3>
                            <label className='text-start p-2 text-xl text-slate-600'>Title</label>
                            <input placeholder='Title' className='p-2 px-2 rounded-2xl' value={title} name='title' id='title' onChange={(event) => handleInput(event)}></input>
                            <label className='text-start p-2 text-xl text-slate-600'>Description</label>
                            <textarea rows={4} cols={4} className='mt-2 rounded-2xl p-4' placeholder='Description' value={description}  id='description' name='description' onChange={(event) => handleInput(event)}></textarea>

                            <div className="modal-action py-2">
                           
                            <form  onSubmit={(event) => handleSubmit(event)}>
                                 <button  onClick={handleReload}>
                                 <button className="btn text-2xl font-md  bg-red-100 p-1 px-10 rounded-2xl "  >Create</button>
                                    

                                </button>

                            </form>
                            
                            
                           
                            </div>
                        </div>
                        </dialog>
                       


                      
                </div>
            </div>
            <Cards/>
        </div>
    );
};

export default Homepage;