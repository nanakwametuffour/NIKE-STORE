import React from 'react'
import Hero from './components/Hero'
 import { heroapi, popularsales, toprateslaes, highlight, sneaker } from './data/data'
import Product from './components/Product'
import Content from './components/Content';
export default function App() {
  return (
    <>
      <main className="flex flex-col gap-16">
        <Hero heroapi={heroapi} />
        <Product endpoint={popularsales} ifExists />
        <Content endpoint={highlight} ifExists/>
        <Product endpoint={toprateslaes} />
        <Content endpoint={sneaker} />
      </main>
    </>
  );
}

