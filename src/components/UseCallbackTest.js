import { useState, useCallback } from 'react';


const UseCallbackTest = () => {
  const [number, setNumber] = useState(0);

  const someFunction = () =>{
    console.log(`someFunction number : ${number}`);
    return;
  }

  console.log(`number : ${number}`);

  return (
    <div>
      <input 
        type="number"
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
      />
      <br/>
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  )
}

export default UseCallbackTest;

