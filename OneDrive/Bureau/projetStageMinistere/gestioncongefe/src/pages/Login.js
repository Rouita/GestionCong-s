import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    setError('');
  setIsLoading(true);

  axios
    .post('http://localhost:8080/login', {
      email: email,
      passwd: password,
    })
    .then((response) => {
      console.log(response.data);
      const userProfile = response.data.profile;
      const userId = response.data.id; // Supposons que l'API renvoie l'ID de l'utilisateur
      localStorage.setItem('userId', userId); // Stocker l'ID de l'utilisateur dans le local storage



      switch (userProfile) {
        case 'rh':
          navigate('/rh');
          break;
        case 'admin':
          navigate('/');
          break;
        case 'cadre':
          navigate('/cadre');
          break;
        case 'responsable':
          navigate('/ahmed');
          break;
        default:
          // Handle other profiles or default case
          navigate('/login');
          break;
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la connexion:', error);
      setError('Identifiants invalides. Veuillez réessayer.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>Connexion</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '18px' }}>Email:</label>
        <input style={{ width: '100%', padding: '12px', fontSize: '16px', lineHeight: '1.5', border: '1px solid #ccc', borderRadius: '5px' }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '18px' }}>Mot de passe:</label>
        <input style={{ width: '100%', padding: '12px', fontSize: '16px', lineHeight: '1.5', border: '1px solid #ccc', borderRadius: '5px' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div style={{ color: 'red', fontSize: '16px', marginBottom: '10px' }}>{error}</div>}
      <button style={{ width: '100%', padding: '10px', fontSize: '18px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Connexion en cours...' : 'Se connecter'}
      </button>
    </div>
  );
}
