import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 style={{textAlign:'center', marginBottom:'20px'}}>Counter App</h2>
<p style={{textAlign:'center'}}>Count: {count}</p>
<div style={{display:'flex', textAlign:'center', justifyContent:'center', flexDirection:'row', gap:'10px'}}>
  <button onClick={()=>{
    setCount(prev=>prev+1);
  }}>Increment</button>
  <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
</div>
          </>
  )
}

export default App
