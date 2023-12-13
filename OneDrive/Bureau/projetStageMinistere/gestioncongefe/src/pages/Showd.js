import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export default function Showd() {
  const [user, setUser] = useState({
    dateDebut: "",
    dateFin: "",
    motif: "",
    etat:""
  });


  useEffect(() => {
    loadUser();
  },);

  const userId = localStorage.getItem('userId'); // Récupérer l'ID de l'utilisateur du local storage


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${userId}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Details Conge</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Date Debut Conge : </b>
                  {user.dateDebut}
                </li>
                <li className="list-group-item">
                  <b>Date fin Conge : </b>
                  {user.dateFin}
                </li>
                <li className="list-group-item">
                  <b>Etat conge : </b>
                  {user.etat}
                </li><li className="list-group-item">
                  <b>Motif : </b>
                  {user.motif}
                </li>
              </ul>
            </div>
          </div>
          <br></br>
          <Link className="btn btn-primary my-2" to={"/cadre"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}