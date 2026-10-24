import React from 'react'

const App = () => {
  const [g, setG] = useState('initial value')
  const [makna, setmakna] = useState('second value')
  function change(){
    setmakna("hello")
  }
  function grp() {
    console.log('button clicked by another way')
  }
  return (
    <div>
      hello
      how are you doing this is my first react project i am buidling skils that going to be vanish in next years soo
      here we arwe
      <button onClick={() => {
        console.log('button clicked')
      }}>click me</button>

     <div>hello
      
      <button onClick={grp()}>
        click me by the another way
      </button>
      <input type="text" onChange={(e) =>{console.log(e.target.value)}} placeholder="Enter text here"/>
      
     

    </div>
  )
}

export default App
