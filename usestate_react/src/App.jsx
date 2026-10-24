/* import React from 'react'
import { useState } from 'react'

const App = () => {


  const [g, setG] = useState('initial value')
  const [makna, setmakna] = useState('second value')
  function change(){
    setmakna("hello")
    setG("updated valueddd")
  }
  return (

    <div>
      <p>{g}</p>
      <p>{makna}</p>
      <button onClick={change}>Update Makna</button>  
      <button onClick={() => setG('updated value')}>
        Update State
      </button>
    </div>
  )
} */
import React from 'react'
import { useState } from 'react'
const App = () => {


  const[num,setnum ] = useState({user:"hello", age: 20})
   function change(){
    const newnum = {...num, user: "updated hello"}
    setnum(newnum)
   }
  return (
    <div>
      <p>{num.user}</p>
      <p>{num.age}</p>
      <button onClick={change}>Update User</button>
    </div>
  )

}
export default App
