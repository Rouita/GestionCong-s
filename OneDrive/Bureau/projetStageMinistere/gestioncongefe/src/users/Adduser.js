import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    passwd: "",
    profile: "",
    solde:0,

   
  });

  const { username, email,passwd,profile} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Passwd" className="form-label">
                Passwd
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your passwd"
                name="passwd"
                value={passwd}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Profile" className="form-label">
                Profile
              </label>
              <select
                className="form-control"
                name="profile"
                value={profile}
                onChange={(e) => onInputChange(e)}
              >
                <option value="admin">Administrateur</option>
                <option value="cadre">Cadre</option>
                <option value="responsable">Responsable</option>
                <option value="rh">RH</option>
              </select>
            </div>


           


            
            
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}