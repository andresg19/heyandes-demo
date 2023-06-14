import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCompanies, getSales } from '../Redux/Actions/actions';
import TableCompanies from './TableCompanies';
import Nav from './Nav';
import DataBoxes from './DataBoxes';

const Companies = () => {
    const agencies = useSelector((state) => state.dataCompanies);
    const sales = useSelector((state) => state.sales);
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
            <article>
                <DataBoxes sales={sales} data={agencies} />
            </article>
            <section className='mt-8 mb-2 w-[90%] mx-auto'>
                <TableCompanies data={agencies}/>
            </section>
        </main>
     );
}
 
export default Companies;