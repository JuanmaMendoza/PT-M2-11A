import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react';

function App() {

  function onClose(id){
    setCharacters(characters.filter((element) => element.id !== id));
  }

  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  const [characters, setCharacters] = useState([]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  )
}

export default App
