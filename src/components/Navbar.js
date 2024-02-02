import React from 'react';
import {MdOutlineAccountCircle} from 'react-icons/md';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='p-2 px-16 border-b border-black font-poppins text-slate-600'>
            <nav className=' flex justify-center p-2 px-16'>
                 <ul className='flex justify-start gap-[40px]  font-semibold' >
                    <Link to='/'>
                        <li className='text-[16px] hover:text-zinc-400'>Home</li>

                    </Link>
                    <Link to='/'>
                         <li className='text-[16px]  hover:text-zinc-400'>Upcoming</li>

                    </Link>
                    <Link to='/account'>
                        <div className='flex gap-2 items-center  hover:text-zinc-400'>
                        <li>Account</li>
                        <MdOutlineAccountCircle className='text-[18px]'/>
                    </div>
                    </Link>
                    
                     
                 
                   
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;