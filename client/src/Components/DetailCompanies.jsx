import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dataPerCompany, filterCompaniesDetail, getSales } from '../Redux/Actions/actions';
import TableDetail from './TableDetail';
import Nav from './Nav';


const DetailCompanies = () => {
    const { name } = useParams();
    const data = useSelector((state) => state.detail)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataPerCompany(name));
    }, []);

     const handleDispatch = (e) => {
        e.preventDefault();
        dispatch(filterCompaniesDetail(e.target.value))
    }
    return ( 
        <main>
        <header>
        <Nav handle={handleDispatch}/>
         </header>
         <section className='mt-8 mb-2 w-[90%] mx-auto'>
             <TableDetail data={data}/>
         </section>
     </main>
     );
}
 
export default DetailCompanies;