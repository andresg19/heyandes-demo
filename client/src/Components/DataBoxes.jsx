import React from "react";

const DataBoxes = ({sales, data}) => {
   let company = data && data.reduce(function(prev, act) {
    return act.total > prev.total ? act : prev;
  });


const dates = sales && sales.map(obj => obj.datePayment.split(" ")[0]);

const repeatDate = mode(dates);
console.log(repeatDate)

function mode(arr) {
  const counter = {};
  let maxCount = 0;
  let mode = null;

  for (const item of arr) {
    counter[item] = (counter[item] || 0) + 1;

    if (counter[item] > maxCount) {
      maxCount = counter[item];
      mode = item;
    }
  }

  return mode;
}
 console.log(company)
    return ( 
        <section className='flex justify-around mt-10 w-[60%] mx-auto'>
            <div>
                <h1>
                    {company && company.nameAgency}
                </h1>
            </div>
            <div>
                <h1>{repeatDate && repeatDate}</h1>
            </div>
        </section>
     );
}
 
export default DataBoxes;