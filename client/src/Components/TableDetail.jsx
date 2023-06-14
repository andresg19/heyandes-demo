import React from 'react';
import { useNavigate } from 'react-router-dom';

const TableDetail = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/')
  }
  return (
    <div className='min-w-full mx-auto'>
    <img src="/backarrow.png" alt="" onClick={handleClick} />
    <table className='w-full mt-5 text-slate-300 shadow-sm shadow-[#000000]'>
      <thead>
        <tr className='border border-gray-700 text-[12px] underline lg:text-[16px]'>
          <th className='p-4'>Client name</th>
          <th className='p-4'>Persons</th>
          <th className='p-4'>Day</th>
          <th className='p-4'>Hour</th>
          <th className='p-4'>Sale value</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (
          <tr className='border border-gray-700 hover:bg-gray-900 text-center text-[10px]  lg:text-[14px]' key={index}>
            <td className='p-4'>{item.name}</td>
            <td className='p-4'>{item.persons}</td>
            <td className='p-4'>{item.datePayment.split(" ")[0]}</td>
            <td className='p-4'>{item.hour}</td>
            <td className='p-4'>${item.finalPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TableDetail;