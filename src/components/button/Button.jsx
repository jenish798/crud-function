import React from "react"
import './button.css'

const ButtonComp = ({onClick,type,children}) =>{
    return(
        <button className="des-button" onClick={onClick} type={type}>{children}</button>
    )
}

export default ButtonComp