import React, {useState} from 'react';
import data from './data';
import Lista from './Lista';
import './App.css';

function App() {
  const [listPelis,setListPelis]= useState(data);


  return (
    <main>
      <section className="container">
        <h3>Movies Favorites</h3>
        <Lista people={listPelis}></Lista>
        <button>Clear all</button>

      </section>
    </main>
  );
}

export default App;
