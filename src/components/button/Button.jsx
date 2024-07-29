import React from "react"
import './button.css'

const ButtonComp = ({onClick,type,name}) =>{
    return(
        <button className="des-button" onClick={onClick} type={type} name={name}>{name}</button>
    )
}

export default ButtonComp