import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count:0,
    }
    styles = {
        fontSize:25,
        fontWeight:'bold',
        color: "black
    }
    render() { 
        let text = this.counterColor();
        return <div>
            <span style={this.styles}className={text}>{this.formatCounter()}</span>
            <button className="btn btn-secomdary m-4">Increment</button>
        </div>;
    }
    counterColor() {
        let text = "badge m-2 ";
        text += (this.state.count === 0) ? "badge-warning" : "badge-primary";
        return text;
    }

    formatCounter(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

 
export default Counter;
