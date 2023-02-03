import React from "react";
import { render } from "react-dom";
export default class Botones extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
                <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
            </div>
        )
    }
}

export{
    Botones
}