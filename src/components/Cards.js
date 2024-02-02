import React, { useEffect, useState } from 'react';
import {FiEdit3} from 'react-icons/fi';
import {MdDeleteOutline} from 'react-icons/md';
import {FaRegCheckCircle} from 'react-icons/fa';
import {IoSearchOutline} from 'react-icons/io5';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cards = () => {

    const[data,setData] = useState([]);
    const[search,setSearch] = useState([])
    
    //Function to get data from backend using axios
    const getData = async () => {
        const result = await axios.get('https://todolist-backend-production-b4bd.up.railway.app/users')
        console.log(result.data)
        setData(result.data)
        setSearch(result.data)
    }
    useEffect( () => {
        getData()

    },[])

    //Delete data function using id as parameter 
    const handleDelete = async (id) => {
        await axios.delete(`https://todolist-backend-production-b4bd.up.railway.app/user/${id}`)
        getData()
    }

    //Filtering data using filter method
    const Filter = (event) => {
        setSearch(data.filter(f => f.title.toLowerCase().includes(event.target.value)))
    }
    
    
    return (
        <div className=' bg-heroBg h-full font-poppins  '>
            <div className='font-poppins flex flex-col items-center gap-10 md:gap-0 md:flex-row md:px-[120px] py-6 font-md'>
                <h1 className='text-3xl font-medium text-slate-600'>All Tasks</h1>
                 <div className='flex gap-2 items-center md:ml-[370px] border-b border-slate-600 px-2 '>
                        <IoSearchOutline className='text-lg '/>
                        <input placeholder='Search' className=' px-6 p-1 rounded-lg' onChange={Filter}></input>
                    </div>

            </div>
            
            <div className='flex flex-col items-center md:grid md:grid-cols-3 md:gap-5 justify-around md:px-[120px] '>
                {
                    search.map((items,index) => (
                       <div className='mb-7' key={items.id}>
                         <div className='text-start bg-cardBox w-[332px] h-[200px] border border-gray-700 rounded-xl md:ml-[50px]   '>
                            <h1 className="text-[30px] font-semibold p-4 text-slate-700">{items.title}</h1>
                            <p className='font-semibold p-4 ml-5 text-slate-600'>{items.description}</p>
                            <div className='flex justify-end gap-3 text-xl  px-5 p-2 rounded-2xl'>

                            <button onClick={() => handleDelete(items.id)}>
                                <FaRegCheckCircle className='hover:text-rose-700'/>

                            </button>

                            <Link to={`/editUser/${items.id}`}>
                                <FiEdit3 className='hover:text-rose-700'/>
                            </Link>
                            
                            <button onClick={() =>handleDelete(items.id)}>
                                <MdDeleteOutline className='hover:text-rose-700'/>

                            </button>
                              
                            </div>

                          </div>
                       </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Cards;