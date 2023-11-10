import { useState } from 'react'
import Heading from './components/Headings'
import Section from './components/Section'
import './App.css'

function App() {
  return (
    <div className='p-5 w-4/6 mx-auto'>
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading >Heading</Heading>
          <Heading >Heading</Heading>
          <Heading >Heading</Heading>
          <Section>
            <Heading >Sub-heading</Heading>
            <Heading >Sub-heading</Heading>
            <Heading >Sub-heading</Heading>
            <Section>
              <Heading >Sub-sub-heading</Heading>
              <Heading >Sub-sub-heading</Heading>
              <Heading >Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  )
}

export default App
