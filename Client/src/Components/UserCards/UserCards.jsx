import "./UserCards.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UserCards() {
  const [users, setUsers] = useState([]);

  const fetchApi = async () => {
    //Con axios, e permite realizar una request a la API con su respectivo link
    const response = await axios.get("http://localhost:8080/api/users");
    if (Array.isArray(response.data)) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    fetchApi();
  });

  return (
    <>
      <div className="card_container">
        {users.map((user, index) => (
          <div key={index} className="divs">
            <p>Nombre: {user.name}</p>
            <p>Edad: {user.age}</p>
            <p>Email: {user.mail}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserCards;
