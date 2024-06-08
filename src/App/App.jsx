import './App.css'
import React from 'react'
import { Cards } from '../Cards'
import { Form } from '../Form'
import { InformationProvider } from '../Context'


function App() {

  return (
    <>
    <InformationProvider>
      <Cards />
      <Form />
    </InformationProvider>
    </>
  )
}

export default App;
