

import React from 'react'
import axios from 'axios'
 import { useState } from 'react' 

const App =  () => {
   const [data, setData] = useState([])



  const getdata = async () => {

const response =  await  axios.get('https://jsonplaceholder.typicode.com/posts')

setData(response.data)}

  return (
    <div>
      <button onClick={getdata}>Click Me</button>  

      <div>
        {data.map((item) => {
          return (
            <div  >
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <h6>{item.id}</h6>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App




