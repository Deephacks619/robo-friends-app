import React from "react";
import Card from './Card';


const Cardarray = ({names}) =>{
    const cardcomp=names.map((user,i)=>{
        return <Card key={i} id={names[i].id} name={names[i].name} email={names[i].email}/>
    })
    return (
        <div>
            {cardcomp}
        </div>
    );
}
export default Cardarray;