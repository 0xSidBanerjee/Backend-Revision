import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes]=useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err); 
      });
  }, []);

  return ( 
    <>
      <h1>BRZRKR</h1>
      <p>{jokes.length}</p>
      {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
        </div>
      ))
}
    </>
  )
}

export default App
