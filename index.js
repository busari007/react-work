import React from 'react';
import ReactDOM from 'react-dom';

//const element = <h1>Hello There</h1>;
//ReactDOM.render(element, document.getElementById("root"));
/*function user(){
    return firstname + " " + lastname;
}
let firstname = "Will";
let lastname = "Busari";
const input = <h2>Hello {user(firstname,lastname)}</h2>;
const name = ReactDOM.createRoot(
    document.getElementById('root')
);
name.render(input);*/

//const root = ReactDOM.createRoot(document.getElementById('root'));

/*function tick(){

    const element =(
    <div>
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick);*/  /*setInterval is a method that calls a function or runs some code after specific intervals of time, as specified through the second parameter*/

/*class Welcome extends React.Component{
render(){
return <h1>Hello {this.props.name}</h1>;
}
}

const element = <Welcome name = 'William'/>
ReactDOM.render(element, document.getElementById('root'));*/

function Comment(props){
    return(
        <div className='Comment'>
            <div className='UserInfo'>
                <img className='Avatar'
                src={props.author.avatarUrl}
                alt={props.author.name}
                />
                <div className='UserInfo-name'>
                 {props.author.name}
                 </div>
                 </div>
                 <div className="Comment-date">
                     {formatDate(props.date)}
                     </div>
                     </div>
    );
}