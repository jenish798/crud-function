import React from 'react';
import './input.css';

const InputComp = ({type = 'text',onChange,placeholder,required = 'true'}) =>{
    return(
        <input
        className='des-input'
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required = {required}
        />
    )
}

export default InputComp