import React from 'react'
import Hero from './components/Hero'
 import { heroapi, popularsales, toprateslaes } from './data/data'
import Product from './components/Product'
export default function App() {
  return (
    <>
      <main className='flex flex-col gap-16'>
        <Hero heroapi={heroapi} />
        <Product endpoint={popularsales} ifExists/>
        <Product endpoint={toprateslaes}/>
      </main>
    </>
  );
}

