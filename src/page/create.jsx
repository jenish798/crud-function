import React, { useState} from 'react';
import {Link, useNavigate } from "react-router-dom";
import array from "../utils/const";
import { v4 as uuid } from 'uuid';
import {ButtonComp, InputComp} from '../components';
import strings from '../utils/string';

export default function Create(){

    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) =>{
e.preventDefault();

const ids = uuid();
console.log(ids)
let uni = ids.slice(0,8);

let a=name, b= age;
if(name =='' || age ==''){
    alert(strings.invalid)
    return
}
array.push({id:uni,Name:a,Age:b})

history('/')
    }
    return(
        <div>
<form>

    <InputComp onChange={(e)=>setName(e.target.value)} type="text" placeholder={strings.placeholdername} required />
    <InputComp onChange={(e)=> setAge(e.target.value)} type="number" required placeholder={strings.placeholderage}/>


    <ButtonComp onClick = {(e) => handleSubmit(e)} type='submit'>
        {strings.submitBtn}
    </ButtonComp>

    <Link to='/'> 
    <ButtonComp>{strings.homeBtn}</ButtonComp></Link>
   
</form>
        </div>
    )
}