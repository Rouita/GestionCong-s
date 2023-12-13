import React from 'react';
import { Link } from 'react-router-dom';

export default function Cadre() {
  const buttonStyle = {
    marginBottom: '10px',
    width: '30%', // Ajoutez cette propriété pour que les boutons occupent toute la largeur
  };

  return (
    <div>
      <h2>Menu Cadre</h2>
      <div>
      <br></br>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link className="btn btn-outline-primary" to="/formd" style={buttonStyle}>
              demander Conge
            </Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link className="btn btn-outline-primary" to="/infosp" style={buttonStyle}>
              voir mes informations personnels
            </Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link className="btn btn-outline-primary" to="/showd" style={buttonStyle}>
              voir ma demande de conge
            </Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link className="btn btn-outline-primary" to="/login" style={buttonStyle}>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
