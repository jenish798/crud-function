import React from "react"
import './button.css'

const ButtonComp = ({onClick,type,children, name='create'}) =>{
    return(
        <button className="des-button" onClick={onClick} type={type} name={name}>{children || name}</button>
    )
}

export default ButtonComp