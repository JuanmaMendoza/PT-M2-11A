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
   return (
      <div>
         <input style={styledInput} type='search' />
      <button style={styledButton} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
