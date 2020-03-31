import React from "react";
import Cardarray from "./Cardarray";
import Search from "./Search";
//import { names } from './names';
import './App.css';


class App extends React.Component{
    constructor(){
        super()
        this.state={
            names:[],
            searchfield:""
        }
        this.onsearchchange=this.onsearchchange.bind(this)
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((users)=>
            this.setState({
                names:users
            })
        )
    }
    onsearchchange(event){
        this.setState({
            searchfield:event.target.value
        })
    }
    render(){
        const filterrobots=this.state.names.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.names.length === 0){
            return <h2>loading....  please wait</h2>
        }
        else{
    return (
        <div className="total">
            <div className="tc">
                <h1 className="ma0" style={{fontFamily:"sega logo font"}}>ROBO SEARCH</h1>
                <Search searchChange={this.onsearchchange} />  
                <hr></hr>
            </div>
            <Cardarray names={filterrobots} />
        </div>

    );
}}
}
export default App;