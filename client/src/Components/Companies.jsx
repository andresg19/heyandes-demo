import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCompanies, getSales } from '../Redux/Actions/actions';
import TableCompanies from './TableCompanies';
import Nav from './Nav';

const Companies = () => {
    const agencies = useSelector((state) => state.dataCompanies);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getSales())
    }, []);

    const handleDispatch = (e) => {
        e.preventDefault();
        dispatch(filterCompanies(e.target.value))
    }
    return ( 
        <main>
           <header>
            <Nav handle={handleDispatch} />
            </header>
            <section className='mt-10 w-[90%] mx-auto'>
                <TableCompanies data={agencies}/>
            </section>
        </main>
     );
}
 
export default Companies;