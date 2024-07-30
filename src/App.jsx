import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncExp from './components/IncExp';
import TransList from './components/TransList';
import AddTrans from './components/AddTrans';
import { GlobalProvider } from './context/GlobalState';

function App() {
  

  return (
    <GlobalProvider className="bg-gray-800">
      <div className='shadow-xl p-5 mt-5 bg-gray-100'>
        <div>
          <Header/>
        </div>
        <div>
          <Balance/>
        </div>
        <div>
          <IncExp/>
        </div>
        <div>
          <TransList />
        </div>
        <div>
          <AddTrans />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
