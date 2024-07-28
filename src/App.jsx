import React from 'react'
import Hero from './components/Hero'
 import { heroapi } from './data/data'
export default function App() {
  return (
    <>
    <main>
      <Hero heroapi={heroapi}/>
    </main>
    </>
  )
}

