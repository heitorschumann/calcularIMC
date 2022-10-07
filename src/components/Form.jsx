import "bootstrap/dist/css/bootstrap.css";
import "./form.css";
import React, { useState } from "react";
import CardsInfo from "./CardsInfo";

const Form = () => {
	const usersInfo = [];
	function calcularIMC() {
		setImc(Math.floor(peso / Math.pow(altura, 2)));

		console.log(nome, peso, altura, imc);
		console.log(usersInfo);
		const returnObj = { nome, peso, altura, imc };
		const copy = { ...returnObj };
		usersInfo.push(copy);
	}

	const [nome, setNome] = useState();
	const [altura, setAltura] = useState();
	const [peso, setPeso] = useState();
	const [imc, setImc] = useState();

	function nomeChangeHandler(event) {
		setNome(event.target.value);
	}
	function pesoChangeHandler(event) {
		setPeso(event.target.value);
	}
	function alturaChangeHandler(event) {
		setAltura(event.target.value);
	}

	return (
		<div class="form-main">
			<form class="col-xs-4">
				<label class="label label-primary" for="nome">
					Nome
				</label>
				<input
					type="text"
					class="form-control"
					id="nome"
					placeholder="Nome"
					onChange={nomeChangeHandler}
					style={{ margin: "15px 0" }}
				/>
				<label class="label label-primary" for="altura">
					Altura
				</label>
				<input
					type="number"
					class="form-control"
					id="altura"
					placeholder="Altura"
					onChange={alturaChangeHandler}
					style={{ margin: "15px 0" }}
				/>
				<label class="label label-primary" for="peso">
					Peso
				</label>
				<input
					type="number"
					class="form-control"
					id="peso"
					placeholder="Peso"
					onChange={pesoChangeHandler}
					style={{ margin: "15px 0" }}
				/>
				<input
					type="button"
					value="Calcular"
					class="btn btn-primary"
					onClick={calcularIMC}
				/>
			</form>

			<div
				class="panel panel-default"
				style={{ width: "300px", height: "150px" }}
			>
				<div class="panel-heading">
					<h3 class="panel-title">{nome}</h3>
				</div>
				<div class="panel-body ">
					<p>Peso: {peso}</p> <p>Altura: {altura}</p>{" "}
					<p>IMC: {imc}</p>{" "}
				</div>
			</div>

			{usersInfo.map((user) => {
				return (
					<div
						class="panel panel-default"
						style={{ width: "300px", height: "150px" }}
					>
						<div class="panel-heading">
							<h3 class="panel-title">{user.nome}</h3>
						</div>
						<div class="panel-body ">
							<p>Peso: {user.peso}</p>{" "}
							<p>Altura: {user.altura}</p> <p>IMC: {user.imc}</p>{" "}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Form;
