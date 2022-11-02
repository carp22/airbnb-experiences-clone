import Header from "./components/Header";
import Card from "./components/Card";
import React from "react";
import data from '../data.js';


function App() {
  const cardElements  =  data.map(element => {
    return (
    <Card 
      key = {element.id}
      element = {element}
      />
    )  
  })
  return (
    <>
      <Header />
      <section className="cards-list">
        {cardElements}
      </section>

      
    </>
  )
}

export default App