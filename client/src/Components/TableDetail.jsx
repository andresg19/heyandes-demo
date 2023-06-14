import React from 'react';
import { Link } from 'react-router-dom';

const TableDetail = ({ data }) => {
    console.log(data)
  return (
    <table className='mx-auto w-full'>
      <thead>
        <tr className='border divide-y divide-gray-200 text-center'>
          <th className='p-4'>Client name</th>
          <th className='p-4'>Persons</th>
          <th className='p-4'>Day</th>
          <th className='p-4'>Hour</th>
          <th className='p-4'>Sale value</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (
          <tr className='hover:bg-gray-100 text-center' key={index}>
            <td className='p-4'>{item.name}</td>
            <td className='p-4'>{item.persons}</td>
            <td className='p-4'>{item.datePayment.split(" ")[0]}</td>
            <td className='p-4'>{item.hour}</td>
            <td className='p-4'>{item.finalPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDetail;