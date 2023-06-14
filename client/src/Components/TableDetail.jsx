import React from 'react';
import { Link } from 'react-router-dom';

const TableDetail = ({ data }) => {
    console.log(data)
  return (
    <table>
      <thead>
        <tr>
          <th>Client name</th>
          <th>Persons</th>
          <th>Day</th>
          <th>Hour</th>
          <th>Sale value</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.persons}</td>
            <td>{item.datePayment.split(" ")[0]}</td>
            <td>{item.hour}</td>
            <td>{item.finalPrice}</td>
            <button >
                <Link to={"/company/" + item.nameAgency}>Detail</Link>
              </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDetail;