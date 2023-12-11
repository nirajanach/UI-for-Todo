import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoContainer from './components/TodoContainer'
import './App.css'
import {  useState } from 'react'
import Login from './components/Login'

function App() {

  const [isAuthorized, setIsAuthorized] = useState(false);

//   useEffect(() => {
// const token = window.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
// setIsAuthorized(!!token)
//   }, [])

// console.log(text); 



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Todo App</h1>
      {isAuthorized ? <TodoContainer /> : <Login handleSuccess={() => setIsAuthorized(true)} />}          
    </>
  )
}

export default App
