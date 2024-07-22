import { useState } from "react"
import {Link, useNavigate } from "react-router-dom";
import array from "./array";
import { v4 as uuid } from 'uuid';


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
    alert('invalid input')
    return
}
array.push({id:uni,Name:a,Age:b})

history('/')
    }
    return(
        <div>
<form>

    <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter Name" required />
    <input onChange={(e)=> setAge(e.target.value)} type="number" required placeholder="Age"/>

    <button onClick={(e) => handleSubmit(e)} type="submit">
submit
    </button>

    <Link to='/'> 
    <button>Home</button></Link>
   
</form>
        </div>
    )
}