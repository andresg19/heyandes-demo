import React from 'react';

const Nav = ({handle}) => {

    return ( 
        <nav>
            <ul className='flex list-none'>
                <li className='ml-5'>
                    <h1>HeyAndres</h1>
                </li>
                <li className='mx-auto'>
                    <select name="" id="" onChange={handle}>
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