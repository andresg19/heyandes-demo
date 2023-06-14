import React from 'react';
import { Link } from 'react-router-dom';

const TableCompanies = ({ data }) => {
    console.log(data)
  return (
    <table className='mx-auto w-full'>
      <thead>
        <tr className='border divide-y divide-gray-200 text-center'>
          <th className='p-4'>Company</th>
          <th className='p-4'>Total</th>
          <th className='p-4'>Comission</th>
          <th className='p-4'>Detail</th>
        </tr>
      </thead>
      <tbody divide-y divide-gray-200>
        {data && data.map((item, index) => (
          <tr className='hover:bg-gray-100 text-center' key={index}>
            <td className='p-4'>{item.nameAgency}</td>
            <td className='p-4'>{item.total}</td>
            <td className='p-4'>{item.comission}</td>
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