import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Listev() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data); 
  };

  // Filtrer les utilisateurs avec l'état "valider"
  const validUsers = users.filter(user => user.etat === "valider");

  return (
    <div className='container'>
                    <h3>Liste Conges Validé</h3>

      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Profile</th>
              <th scope="col">dateDebut</th>
              <th scope="col">dateFin</th>
              <th scope="col">Motif</th>
              <th scope="col">Etat</th>
            </tr>
          </thead>
          <tbody>
            {validUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.profile}</td>
                <td>{user.dateDebut}</td>
                <td>{user.dateFin}</td>
                <td>{user.motif}</td>
                <td>{user.etat}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-outline-danger mx-2" to="/rh">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
