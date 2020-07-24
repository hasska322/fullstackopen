import React, { Component } from "react";
import ReactDOM from 'react-dom';


const head = {
    padding: '0 10px 0 10px',
    marginLeft: '10px'
}
export default class Part extends Component{
    constructor() {
        super();
    }
    render() {
        const name = this.props.part_info[0];
        const exercises = this.props.part_info[1];
        return(
            <div style={{textAlign:'center'}}>
                <div style={head}>
                    <h2 >{name}</h2>
                </div>
                <div style={head}>
                    <p>Exercises = {exercises}</p>
                </div>
            </div>
        )
}