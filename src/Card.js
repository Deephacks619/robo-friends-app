import React from 'react';
//import ReactDOM from 'react-dom';
import "tachyons";

class Card extends React.Component{
   
    render(){
        let styles={
            display:"inline"
        }
    return(
        <div  style={styles} >
        <div className='tc bg-light-green dib br4 pa3 ma3 grow bw3 shadow-5 w-11' >
            <img alt='raj' src={`https://robohash.org/${this.props.id}?200x200`}/>
            <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.email}</p>
            </div>
        </div>
        </div>

    );
}
}
export default Card;
