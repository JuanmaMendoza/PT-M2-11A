import styled from 'styled-components';

const DivCards = styled.div`
display: inline-block;
background-color: darkslateblue;
border-radius: 10px;
color: white;
overflow: hidden;
margin: 25px 25px;
`;

const Button = styled.button`
 position: relative;
right: -120px;
top: 10px;
background-color: purple;
color: white;
border: 0px;
width; 30px;
height: 30px;
border-radius: 5px;
font-weight: bold;
font-size: 15px;
`;

const styledSpecies = {
   display: 'inline-block',
   fontSize: '16px',
   color: 'purple',
   marginRight: '15px',
   marginTop: '-10px',
}

const styledGender = {
   display: 'inline-block',
   fontSize: '16px',
   color: 'deeppurple',
   marginTop: '-10px',
}

export default function Card(props) {
   return (
      <DivCards>
         <Button onClick={props.onClose}>X</Button>
         <h2>{props.name}</h2>
         <h2 style={styledSpecies}>{props.species}</h2>
         <h2 style={styledGender}>{props.gender}</h2>
         <img src={props.image} alt="" />
      </DivCards>
   );
}
