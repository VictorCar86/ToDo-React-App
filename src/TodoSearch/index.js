import React from "react"
import { TodoContext } from "../TodoContext"
import "./TodoSearch.css"

function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (info)=>{
        setSearchValue(info.target.value)
    }
    return(
        <div className="TodoSearch">
            <input placeholder="Cebolla" value={searchValue} onChange={onSearchValueChange} />
        </div>
    );
}

export {TodoSearch};