import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count:0
    }
    styles = {
        fontSize:30,
        fontWeight:"bold",     //testing styles
        color:"black"
    }
    render() { 
        return (
        <div>
        <span style = {this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>  
        <button className="btn btn-secondary btm-sm m-3">Increment</button>
        </div>
        );
    }
    formatCount(){
        const {count} = this.state;                //testing states
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;
