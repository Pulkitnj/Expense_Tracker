import React,{ useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTrans() {
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
      const amountNumber = +amount;
      if (amountNumber == 0) {
        alert('Amount must be greater than 0');
        return;
      }
      const newTransaction ={
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: amountNumber //Convert to number
      }
      addTransaction(newTransaction);
      setText('');
      setAmount('');
    }

  return (
    <div className='mt-6'>
      <div>
        <div className='font-semibold text-2xl mb-2'>
          Add New Transaction
        </div>
        <form onSubmit = {onSubmit}>
          <div className='mb-2'>
            <label className='block'>Text</label>
            <input type='text' value={text} required onChange={(e) => setText(e.target.value)} className='border border-gray-400 p-1 w-full' placeholder='Enter Text...' />
          </div> 
          <div className='mb-2'>
            <label className='block'>Amount</label>
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} className='border border-gray-400 p-1 w-full' placeholder='Enter Amount...' />
          </div>
          <button className='bg-gray-600 text-white p-1 rounded w-full'>Add Transaction</button>
        </form>
      </div>
    </div>
  )
}

export default AddTrans
