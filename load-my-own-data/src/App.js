import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [users, setUsers] = useState([])
  const nameRef = useRef('')
  const emailRef = useRef('')

  const divStyle = {
    textAlign: 'center',


  }

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  const handleAddUser = e => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const newUser = { name: name, email: email };
    //send data server side
    fetch('http://localhost:5000/users', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        const addedUser=data;
        const newUser =[...users,addedUser];
        setUsers(newUser)
      });
      nameRef.current='';
      emailRef.current='';
    e.preventDefault();
  }

  return (


    <div style={divStyle}>
      <h1>length {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type='name' ref={nameRef} placeholder='Name'></input>
        <input type='email' ref={emailRef} placeholder='Email'></input>
        <input type='submit' value='Submit'></input>
      </form>

      <ul>
        {users.map(user => <li key={user.id}>  {user.id} : {user.name} :  {user.email} </li>)}
      </ul>
    </div>
  );
}

export default App;
