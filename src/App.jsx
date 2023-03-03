import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const sendPostRequest = async (mainAction, data) => {
	return await fetch(mainAction, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', async ()=>{
//     let resp = await sendPostRequest('/getUsers',{});
//     console.log(await resp.json());
// })

// const add = document.querySelector('.add');
// add.addEventListener('click', async ()=>{
//     let resp = await sendPostRequest('/addUser',{
//         id: 2,
//         name: 'Dayneris',
//         surname: 'Targaryan',
//         age: 30
//     });
//     console.log(await resp.json());
// })
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={async() => {
            let resp = await sendPostRequest('http://localhost:3000/getUsers',{});
            console.log(await resp.json());
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
