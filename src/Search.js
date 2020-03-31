import React from "react";
import './App.css'

const Search =({searchChange}) =>{
    return(
        <div className="box">
            <input className="tc bg-light-grey shadow-5 pa2 w-20"
             type='search'
              placeholder="Search Robot"
              onChange={searchChange}
              >
              </input>
        </div>
    );
}
export default Search;