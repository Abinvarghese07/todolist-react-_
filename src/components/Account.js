import React from 'react';
import { useNavigate } from 'react-router-dom';


const Account = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className='bg-heroBg h-screen w-full  flex justify-center font-poppins '>
             <div className='mt-[8%] '>
                <form className='font-mono flex flex-col p-8 shadow-md shadow-outerBox w-[380px] h-[400px] text-slate-600'>
                    <h2 className='font-bold text-3xl py-2 text-decoration: underline'>SignIn</h2>
                    <label className='text-xl text-start font-bold py-2'>Mail</label>
                    <input className='p-2 rounded-[10px]' placeholder='Enter your mail' type='email'></input>
                    <label className='text-xl text-start font-bold py-2'>Password</label>
                    <input className='p-2 rounded-[10px] ' placeholder='Enter your password' type='password'></input>
                    <button className='bg-outerBox p-2 rounded-[20px] mt-7' onClick={handleClick}>SignIn</button>
                </form>
        
            </div>
        </div>
    );
};

export default Account;