import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export default function Infosp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    passwd: "",
    profile: "",
    solde: "",
    
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
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Username : </b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email : </b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Passwd : </b>
                  {user.passwd}
                </li>
                <li className="list-group-item">
                  <b>Profile : </b>
                  {user.profile}
                </li>
                <li className="list-group-item">
                  <b>Solde : </b>
                  {user.solde}
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