import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

const Form = () => {
	function calcularIMC() {
		setImc(Math.floor(peso / Math.pow(altura, 2)));

		console.log(nome, peso, altura, imc);
		return Math.floor(imc);
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
		<div>
			<form class="col-xs-6 block">
				<label class="label label-primary" for="nome">
					Nome
				</label>
				<input
					type="text"
					class="form-control"
					id="nome"
					placeholder="Nome"
					value={nome}
					onChange={nomeChangeHandler}
				/>
				<label class="label label-primary" for="altura">
					Altura
				</label>
				<input
					type="number"
					class="form-control"
					id="altura"
					placeholder="Altura"
					value={altura}
					onChange={alturaChangeHandler}
				/>
				<label class="label label-primary" for="peso">
					Peso
				</label>
				<input
					type="number"
					class="form-control"
					id="peso"
					placeholder="Peso"
					value={peso}
					onChange={pesoChangeHandler}
				/>
				<input
					type="button"
					value="Calcular"
					class="btn btn-primary"
					onClick={calcularIMC}
				/>
			</form>

			<div class="panel panel-default col-xs-2">
				<div class="panel-heading ">
					<h3 class="panel-title">{nome}</h3>
				</div>
				<div class="panel-body ">
					<p>Peso: {peso}</p> <p>Altura: {altura}</p>{" "}
					<p>IMC: {imc}</p>{" "}
				</div>
			</div>
		</div>
	);
};

export default Form;
