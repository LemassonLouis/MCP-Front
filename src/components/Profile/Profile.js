import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { getUser, getAllUsers } from "../../services/userApiService";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getUser()
      .then((res) => {
        res.status === 200 && setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getAllUsers()
      .then((res) => {
        res.status === 200 && setAllUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Bienvenue sur votre profil</h1>
      {user?.email && <p>Adresse email : {user?.email}</p>}
      <div>
        <ul>
          {allUsers.map((i, idx) => {
            return <li key={idx}>Email : {i.email}</li>;
          })}
        </ul>
      </div>
      <br />
      <Button onClick={() => navigate("/supplier")} variant="contained">
        Fournisseur
      </Button>
      <br />
      <NavBar />
    </div>
  );
};

export default Profile;
