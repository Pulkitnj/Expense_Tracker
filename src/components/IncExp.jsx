import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function IncExp() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.reduce((sum,curr) => (curr>0 ? sum+=curr : sum),0).toFixed(2);
  const expense = amounts.reduce((sum,curr) => (curr<0 ? sum-=curr : sum),0).toFixed(2);
  return (
    <div className='flex flex-row justify-between shadow-lg p-4 mt-4 bg-gray-200 '>
        <div className='shadow-lg p-6 bg-gray-100'>
            Income
            <div className="text-green-700 font-bold">
              ₹{income}
            </div>
        </div>
        <div className='shadow-lg p-6 text-gray-100 bg-red-600'>
            Expense 
            <div className="text-gray-100 font-bold">
              ₹{expense}
            </div>
        </div>    
    </div>
  )
}

export default IncExp
