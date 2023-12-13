import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function MYHOME() {
 
    const [users,setUsers]=useState([]);

    useEffect( ()=>{
        loadUsers();

    },[]
    );

    const loadUsers = async ()=> {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data); 
    };
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    };


  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Username</th>
      <th scope="col">Profile</th>
      <th scope="col">Email</th>
      <th scope="col">Solde</th>
      <th scope="col">Passwd</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

{
    users.map((user,index)=>(

    <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.username}</td>
      <td>{user.profile}</td>
      <td>{user.email}</td>
      <td>{user.solde}</td>
      <td>{user.passwd}</td>
      <td>
        <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>        
        <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>edit</Link>
        <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>delete</button>
      </td>
    </tr>
    
    

    ))
}

    
  
  </tbody>
  
</table>

            <Link className="btn btn-outline-primary" to="/adduser">
              Add user ?
            </Link>
            <Link className="btn btn-outline-danger mx-2" to="/login">
              Log Out
            </Link>

        </div>
       
    </div>
    
  );
}
