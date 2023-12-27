import './App.css'
import Form from './components/Form'
import {useState} from 'react'

function App() {
const[notes,setNotes] = useState({})
const[showForm,setShowForm] = useState(false)
  return (
    <main className='app'>
    { showForm && <Form/>}
    <button onClick={() =>{
      setShowForm(prev => {
        return !prev;
      })
    }}
    className='showBtn'
    >
      {showForm?"hide":"show"}
    </button>
  </main>
    
  )
}

export default App
