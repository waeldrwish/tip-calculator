'use client';

import { useState } from 'react';
export default function page() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [no, setNo] = useState(0);
  const total = bill * tip;
  const totalTip = total / no;
  return (
    <>
      <div
        className="w-1/4 border border-indigo-60 drop-shadow-sm bg-slate-200 rounded-md m-auto mt-10 p-2">
        <h1 className="text-2xl font-bold m-2 text-center">Tip-Calculator</h1>
        <form>
          <p className="ml-2">Bill Amount</p>
          <input type="number" className="w-full border border-dark rounded-md p-2"
            placeholder="Bill Amount"
            onChange={(e) => {
              setBill(parseFloat(e.target.value));
            }}></input>
          <p className="mt-2 ml-2">Tip Percentage</p>
          <a className="w-1/4 bg-sky-500/100 p-3 rounded-md m-2 text-white hover:bg-sky-500/75"
          onClick={(e)=>{
            setTip(0.05);
          }}>5%</a>
          <a className="w-1/4 bg-sky-500/100 p-3 rounded-md m-2 text-white hover:bg-sky-500/75"
          onClick={()=>{
            setTip(0.1);
          }}>10%</a>
          <a className="w-1/4 bg-sky-500/100 p-3 rounded-md m-2 text-white hover:bg-sky-500/75"
          onClick={()=>{
            setTip(0.15);
          }}>15%</a>
          <a className="w-1/4 bg-sky-500/100 p-3 rounded-md m-2 text-white hover:bg-sky-500/75"
          onClick={()=>{
            setTip(0.2);
          }}>20%</a>
          <a className="w-1/4 bg-sky-500/100 p-3 rounded-md m-2 text-white hover:bg-sky-500/75"
          onClick={()=>{
            setTip(0.25);
          }}>25%</a>
          <input type="number"
            className="w-1/4 bg-sky-500/100 p-3 rounded-md m-2 text-white text-center text-white"
            placeholder="other"
            onChange={(e) => {
              setTip(parseFloat(e.target.value));
            }}></input>
          <p className="mt-2 ml-2">No Of Person</p>
          <input type="number" className="w-full border border-dark rounded-md p-2"
            placeholder="No Of Person"
            onChange={(e) => {
              setNo(parseFloat(e.target.value));
            }}></input>
        </form>
        <div>
          <p className="mt-2 ml-2">Total Tip</p>
          <p className="mt-2 ml-2">$ {total}</p>
          <p className="mt-2 ml-2">Person Tip</p>
          <p className="mt-2 ml-2">$ {totalTip}</p>
        </div>
      </div>
      <p className="text-center text-white m-2">Created by Wael derwish</p>
    </>
  )
}
