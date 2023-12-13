import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Formd() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    dateDebut: "",
    dateFin: "",
    motif: "",
    solde: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // Nouvel état pour le message d'erreur

  const { dateDebut, dateFin, motif, solde } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/user/${userId}`);
      setUser(result.data);
    };
    loadUser();
  }, [userId]);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Calculer la différence en jours entre dateFin et dateDebut
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);
    const timeDifference = endDate - startDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference <= solde) {
      const updatedUser = { ...user, etat: "En cours de traitement" };
      await axios.put(`http://localhost:8080/user/${userId}`, updatedUser);
      navigate("/cadre");
    } else {
      // Afficher un message d'erreur sous le champ "Motif"
      setErrorMessage("Solde insuffisant");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Demande Conge</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row mb-3">
              <label htmlFor="DateDebut" className="col-md-2 col-form-label">
                date debut
              </label>
              <div className="col-md-10">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter your date debut"
                  name="dateDebut"
                  value={dateDebut}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="DateFin" className="col-md-2 col-form-label">
                date fin
              </label>
              <div className="col-md-10">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter your date fin"
                  name="dateFin"
                  value={dateFin}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="Motif" className="col-md-2 col-form-label">
                Motif
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your motif"
                  name="motif"
                  value={motif}
                  onChange={(e) => onInputChange(e)}
                />
                {errorMessage && (
                  <p className="text-danger">{errorMessage}</p>
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/cadre">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
