import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import array from "./array";


export default function Edit() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    let index = array.map(function (e) {
        return e.id;
    })
    .indexOf(id);
    console.log(index)
        

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == '' || age == '') {
            alert('invalid input');
            return;
        }

        let a = array[index];
        console.log(a)
        a.Name = name;
        a.Age = age;

        history('/');
    };

    useEffect(() => {
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setId(localStorage.getItem('id'));
    }, [])
    return (
        <>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                <button onClick={(e) => handleSubmit(e)} type="submit">update</button>
                <Link to='/'><button>Home</button></Link>
            </form>
        </>
    )
}