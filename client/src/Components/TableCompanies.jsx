import React from 'react';
import { Link } from 'react-router-dom';

const TableCompanies = ({ data }) => {
    console.log(data)
  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Total</th>
          <th>Comission</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (
          <tr key={index}>
            <td>{item.nameAgency}</td>
            <td>{item.total}</td>
            <td>{item.comission}</td>
            <button >
                <Link to={"/company/" + item.nameAgency}>Detail</Link>
              </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCompanies;