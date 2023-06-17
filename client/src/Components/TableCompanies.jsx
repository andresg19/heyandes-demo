import React from 'react';
import { Link } from 'react-router-dom';

const TableCompanies = ({ data }) => {
  return (
    <table className='min-w-full  text-slate-300 shadow-sm shadow-[#000000]'>
      <thead>
        <tr className='border border-gray-700 text-[12px] underline lg:text-[16px]'>
          <th className='p-4'>Company</th>
          <th className='p-4'>Total</th>
          <th className='p-4'>Comission</th>
          <th className='p-4'>Detail</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (
          <tr className='border border-gray-700 hover:bg-gray-900 text-center text-[10px] lg:text-[14px]' key={index}>
            <td className='p-4'>{item.nameAgency}</td>
            <td className='p-4'>${item.total}</td>
            <td className='p-4'>${item.comission}</td>
            <td className='p-4 underline text-[#2424a7]' >
                <Link to={"/company/" + item.nameAgency}>Detail</Link>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCompanies;