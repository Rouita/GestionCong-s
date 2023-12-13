import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Validerd() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/users');
    setUsers(result.data);
  };

  const updateBalance = async (id, newStatus) => {
    const userToUpdate = users.find((user) => user.id === id);
    const dateDebut = new Date(userToUpdate.dateDebut);
    const dateFin = new Date(userToUpdate.dateFin);
    const timeDiff = dateFin - dateDebut;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, etat: newStatus, solde: newStatus === 'valider' ? user.solde - daysDiff : user.solde };
      }
      return user;
    });

    await axios.put(`http://localhost:8080/user/${id}`, { ...userToUpdate, etat: newStatus, solde: newStatus === 'valider' ? userToUpdate.solde - daysDiff : userToUpdate.solde });

    setUsers(updatedUsers);
  };

  const rejectUser = async (id) => {
    await updateBalance(id, 'refuser');
  };

  const acceptuser = async (id) => {
    await updateBalance(id, 'valider');
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className='table border shadow'>
          <thead>
            <tr>
              <th scope='col'>id</th>
              <th scope='col'>Username</th>
              <th scope='col'>dateDebut</th>
              <th scope='col'>dateFin</th>
              <th scope='col'>motif</th>
              <th scope='col'>Etat</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              (user.dateDebut !== null && user.dateFin !== null) && (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.dateDebut}</td>
                  <td>{user.dateFin}</td>
                  <td>{user.motif}</td>
                  <td>{user.etat}</td>
                  <td>
                    <button className='btn btn-primary mx-2' onClick={() => acceptuser(user.id)}>
                      valider
                    </button>
                    <button className='btn btn-danger mx-2' onClick={() => rejectUser(user.id)}>
                      refuser
                    </button>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
        <Link className='btn btn-outline-primary' to='/ahmed'>
          Back To Home
        </Link>
      </div>
    </div>
  );
}
