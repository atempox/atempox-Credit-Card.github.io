import './App.css'
import React from 'react'
import { Cards } from '../Cards'
import { Form } from '../Form'
import { InformationProvider } from '../Context'
import { Aside } from '../Aside'


function App() {

  return (
    <div id='conteiner'>
    <InformationProvider>
      <Cards />
      <Form />
      <Aside />
    </InformationProvider>
    </div>
  )
}

export default App;
