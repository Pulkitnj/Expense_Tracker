import React, {useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Transaction({transaction}) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  //Math.abs() here is used to reomve the negative sign from the amount.
  return (
    <div>
    
      <li className={ transaction.amount < 0 ? 'shadow-lg p-1 border-r-4 border-r-red-500' : 'shadow-lg p-1 border-r-4 border-r-green-500'} >
      <div className='flex justify-between'>
        <div className="mt-2">
          {transaction.text}
        </div>
        <div>
          <span className=''> {sign}₹{Math.abs(transaction.amount)}</span>
          <button onClick = {() => deleteTransaction(transaction.id)} className='bg-red-500 text-white p-1 rounded ml-3 '>X</button> 
          
        </div>
      </div>
      </li>

    </div>
  )
}

export default Transaction
