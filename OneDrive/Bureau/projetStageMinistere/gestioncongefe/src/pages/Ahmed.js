import React from 'react';
import { Link } from 'react-router-dom';

export default function Ahmed() {
  const buttonStyle = {
    marginBottom: '10px',
    width: '30%', // Ajoutez cette propriété pour que les boutons occupent toute la largeur
  };

  return (
    <div>
      <h2>Menu Responsable</h2>
      <div>
      <br></br>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          
          <li style={{ marginBottom: '10px' }}>
            <Link className="btn btn-outline-primary" to="/validerd" style={buttonStyle}>
              Les Demandes des Conges
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
