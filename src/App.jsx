import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [total, setTotal] = useState('');

  const handleClick = () => {
    // Your logic for calculating the total amount after applying the discount
    const calculatedTotal = parseFloat(amount) - (parseFloat(amount) * (parseFloat(discount) / 100));
    setTotal(calculatedTotal.toFixed(2)); // Assuming you want to round the total to 2 decimal places

    if(isNaN(parseFloat(amount))|| isNaN(parseFloat(discount))){
      alert('Please enter the number')
    }
  };

 

  const reset = () => {
    setAmount('');
    setDiscount('');
    setTotal('');
  };

  return (
    <>
      <div className="row container">
        <div className="col-md-6 mt-5">
          <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/5834/5834794.png" alt="" />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center  ">
          <div className='d-flex flex-column'>
            <h1 className='mb-5'>Discount Calculator</h1>
            <TextField
              id="standard-basic"
              label="Amount"
              variant="standard"
              className='mb-3'
              value={amount}
              onChange={(e) => { setAmount(e.target.value) }}
            />
            <TextField
              id="standard-basic"
              label="Discount"
              variant="standard"
              className='mb-4'
              value={discount}
              onChange={(e) => { setDiscount(e.target.value) }}
            />
            <h4 className='text-center'>Total Amount: {total}</h4>
            <div className='d-flex justify-content-between mt-5'>
              <Button variant="contained" onClick={handleClick}>Discount</Button>
              <Button onClick={reset} variant="outlined">Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;