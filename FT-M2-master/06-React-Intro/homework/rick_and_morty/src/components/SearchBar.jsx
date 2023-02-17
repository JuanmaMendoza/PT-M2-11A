import { useState } from "react";

const styledInput = {
   marginRight: '15px',
   padding: '10px',
   borderRadius: '5px',
}

const styledButton = {
   backgroundColor: 'blue',
   color: 'yellow',
   border: '0px',
   borderRadius: '5px',
   fontWeight: 'bold',
   fontSize: '15px',
   padding: '10px',
   margin: '25px 0px 25px 0px',
}

export default function SearchBar(props) {
   const {character, setCharacter} = useState(0);
   const handleSearch = (event) => {
      let {value} = event.target;
      setCharacter(value);
   };

   return (
      <div>
         <input style={styledInput} type='search' onChange={handleSearch}/>
      <button style={styledButton} onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
