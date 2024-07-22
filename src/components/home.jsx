import {Link, useNavigate } from "react-router-dom"
import array from './array'



export default function Home(){

    let history = useNavigate();

    function setID(id, name, age) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
    }

    function deleted(id){
        let index= array.map(function (e){
            return e.id
        }).indexOf(id);

        array.splice(index, 1);

        history('/')

    }
    return(
        <div>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
 </thead>
 <tbody>
    {array.map((item)=>{
return(
    <tr>
        <td>{item.Name}</td>
        <td>{item.Age}</td>
        <td>
            <Link to={`/edit`}>
            <button onClick={(e)=>setID(
                item.id,
                item.Name,
                item.Age
            )}>
                Update</button></Link>
        </td>

        <td>
           <button onClick={(e)=> deleted(item.id)}>
            Delete
           </button>
        </td>
    </tr>
)
    })}
 </tbody>
            </table>
            <Link to ='./create'>
            <button>Create</button>
            </Link>
        </div>
    )
}