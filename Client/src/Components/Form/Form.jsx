import React from "react";
import './Form.css';
import { useState } from "react";

function Form() {

	const resetForm = () => {
		document.getElementById('form').reset();
	};

  return (
    <section>
			<h1>Sistema de registro de Usuarios</h1>
			<div className="card">
      <span className="card__title">Registrar Usuarios</span>
      <form action="http://localhost:8080/api/users" method="POST" id="form">
        <div>
          <label htmlFor="name">Nombre:</label>
					<input type="text" name="name" id="name" required/>
        </div>
        <div>
          <label htmlFor="age">Edad:</label>
					<input type="text" name="age" id="age" required/>
        </div>
        <div>
          <label htmlFor="mail">Email:</label>
					<input type="email" name="mail" id="mail" required/>
        </div>
				<div className="buttons">
					<button className="sign-up" type="submit">Enviar</button>
				</div>
      </form>
				<button className="delete" onClick={resetForm}>Limpiar</button>
    </div>
		</section>
  );
};

export default Form;