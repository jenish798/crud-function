import React from 'react';
import './input.css';

const InputComp = ({onChange,type,placeholder,required}) =>{
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