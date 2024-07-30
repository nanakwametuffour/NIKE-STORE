import React from 'react'
import Hero from './components/Hero'
 import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data'
import Product from './components/Product'
import Content from './components/Content';
import Stories from './components/Stories';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';
export default function App() {
  return (
    <>
      <Header/>
      <Cart/>
      <main className="flex flex-col gap-16">
        <Hero heroapi={heroapi} />
        <Product endpoint={popularsales} ifExists />
        <Content endpoint={highlight} ifExists />
        <Product endpoint={toprateslaes} />
        <Content endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI}/>
    </>
  );
}

