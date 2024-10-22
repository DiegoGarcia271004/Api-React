import Form from './Components/Form/Form';
import React from 'react'
import './App.css'
import UserCards from './Components/UserCards/UserCards';

function App() {
  return (
    <>
      <Form/>
      <section>
        <h1>Usuarios</h1>
      <UserCards/>
      </section>
    </>
  )
}

export default App
