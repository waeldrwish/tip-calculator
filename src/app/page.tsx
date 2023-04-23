'use client';

import { useState } from 'react';

export default function Page() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0.05);
  const [no, setNo] = useState(1);

  const total = bill * tip;
  const totalTip = total / no;

  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-indigo-60 drop-shadow-sm bg-slate-200 rounded-md m-auto mt-10 p-2">
        <h1 className="text-2xl font-bold m-2 text-center">Tip Calculator</h1>
        <form className="w-full">
          <p className="ml-2">Bill Amount</p>
          <input
            type="number"
            className="w-full border border-dark rounded-md p-2"
            placeholder="Bill Amount"
            onChange={(e) => setBill(parseFloat(e.target.value))}
          />
          <p className="mt-2 ml-2 w-full">Tip Percentage</p>
          <div className="flex flex-wrap justify-center">
            {[0.05, 0.1, 0.15, 0.2, 0.25].map((percentage) => (
              <a
                key={percentage}
                className="w-1/3 md:w-1/4 lg:w-1/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={() => setTip(percentage)}
              >
                {percentage * 100}%
              </a>
            ))}
            <input
              type="number"
              className="w-full md:w-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
              placeholder="Other"
              onChange={(e) => setTip(parseFloat(e.target.value))}
              value={tip === 0.05 ? '' : tip}
            />
          </div>
          <p className="mt-2 ml-2">No Of Person</p>
          <input
            type="number"
            className="w-full border border-dark rounded-md p-2"
            placeholder="No Of Person"
            onChange={(e) => setNo(parseFloat(e.target.value))}
            value={no}
          />
        </form>
        <div>
          <p className="mt-2 ml-2">Total Tip</p>
          <p className="mt-2 ml-2">$ {total}</p>
          <p className="mt-2 ml-2">Person Tip</p>
          <p className="mt-2 ml-2">$ {totalTip}</p>
        </div>
      </div>
      <p className="text-center text-white m-2">Created by Wael Derwish</p>
    </>
  );
}
