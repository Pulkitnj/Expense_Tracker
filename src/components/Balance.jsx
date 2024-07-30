import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((sum, curr) => (sum += curr), 0).toFixed(2);
  
  return (
    <div className="mt-3">
      <div className='font-medium'> YOUR BALANCE </div>
      <div className='font-medium text-2xl'> 
        ₹{total} 
      </div>
    </div>
  )
}

export default Balance
