import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSales } from '../Redux/Actions/actions';
import TableDetail from './TableDetail';


const DetailCompanies = () => {
    const { name } = useParams();
    const data = useSelector((state) => state.sales)
    const filterDataPerCompany = data.filter((sales) => sales.nameAgency === name);
    console.log(filterDataPerCompany)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSales());
    }, []);
    
    return ( 
        <main>
        <header>
         <nav>
             <h1>HeyAndes</h1>
         </nav>
         </header>
         <section>
             <TableDetail data={filterDataPerCompany}/>
         </section>
     </main>
     );
}
 
export default DetailCompanies;