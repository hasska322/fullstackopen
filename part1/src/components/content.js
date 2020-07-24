import React, { Component } from "react";
import Part from "./part";
import ReactDOM from 'react-dom';

export default class Content extends Component{
    constructor() {
        super();
    }

    render() {
        const info = this.props.course_info;
        return(
            <div>
                <div style={{textAlign:'center'}}><h1>{info[0]}</h1></div>
                <div>
                    <Part part_info={[info[1],info[2]]}/>
                    <Part part_info={[info[3],info[4]]}/>
                    <Part part_info={[info[5],info[6]]}/>
                </div>
            </div>
        )
    }
}