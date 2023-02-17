import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    const {animals} = this.props;

    return <div>
      {animals.map((elemento, key) =><div key={key}>
          <h5>{elemento.name}</h5>
          <img src={elemento.imagen} alt={elemento.name} width= '300px'/>
          <br/>
          <span>{elemento.specie}</span>
        </div>)}
    </div>
  }
}
