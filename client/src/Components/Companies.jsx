import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSales } from '../Redux/Actions/actions';
import TableCompanies from './TableCompanies';

const Companies = () => {
    const agencies = useSelector((state) => state.dataCompanies);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getSales())
    }, []);
    return ( 
        <main>
           <header>
            <nav>
                <h1>HeyAndes</h1>
            </nav>
            </header>
            <section>
                <TableCompanies data={agencies}/>
            </section>
        </main>
     );
}
 
export default Companies;