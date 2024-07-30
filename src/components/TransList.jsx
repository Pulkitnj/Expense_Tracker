import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function TransList() {
  const { transactions } = useContext(GlobalContext); // Destructuring transactions 
  //As transactions is an array of objects, we will map through it and display the text and amount of each transaction.

  return (
    <div className='mt-5 shadow-xl p-1 border-r-4'>
      <div className='font-semibold text-2xl mb-2 mt-2 text-center'>
        History
      </div>
      <div className='mt-1'>
        <ul>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TransList
