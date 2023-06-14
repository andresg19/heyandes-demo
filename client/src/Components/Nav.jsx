import React from 'react';

const Nav = ({handle}) => {

    return ( 
        <nav className='bg-[#0f0e0ee0] min-h-[8vh] lg:min-h-[15vh]'>
            <ul className='flex list-none'>
                <li className='ml-10 text-[#eaff057b] lg:text-[20px]'>
                    <h1>HeyAndes</h1>
                </li>
                <li className= 'ml-3 mt-5 lg:mx-auto'>
                    <select className='bg-transparent cursor-grab text-slate-300 text-[12px] outline-none lg:text-[14px]' name="" id="" onChange={handle}>
                        <option>Choose a filter</option>
                        <option value="alphabetically">alphabetically</option>
                        <option value="value">value</option>
                    </select>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;