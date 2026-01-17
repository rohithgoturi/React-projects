import React,{useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const incBy1 = () => {
    setCount(count + 1);
  }

  const decBy1 = () => {
    setCount(count-1);
  }

  return (
    <div className=' m-5 absolute'>
      <h1 className=' text-white font-extrabold text-2xl font-mono text-center'>Counter Project</h1>

      <p className=' text-amber-300 mt-10 p-2.5 text-xl font-bold font-mono text-center'>Current Count : {count}</p>
      <button className=' text-white bg-gray-800 p-2.5 text-lg font-medium font-mono mt-5 mr-20% rounded-xl hover:border active:bg-black' onClick={incBy1}>Increase by 1</button>
      <button className=' text-white bg-gray-800 p-2.5 text-lg font-medium font-mono mt-5 ml-50 active:bg-black hover:border rounded-xl' 
      onClick={decBy1}>Decrease by 1</button>
    </div>
  )
}

export default App