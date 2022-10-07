import "bootstrap/dist/css/bootstrap.css";
import "./form.css";
import React, { useState } from "react";
import CardsInfo from "./CardsInfo";

const Form = () => {
	const [usersInfo, setUsersInfo] = useState([
		{ nome: "Ze", peso: 60, altura: 1.8, imc: 18 },
	]);
	function calcularIMC() {
		setImc(Math.floor(peso / Math.pow(altura, 2)));

		console.log(nome, peso, altura, imc);
		console.log(usersInfo);
		const returnObj = { nome, peso, altura, imc };
		const copy = { ...returnObj };
		setUsersInfo([...usersInfo, copy]);
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
			<form class="col-xs-6" style={{ margin: "50px 33vw" }}>
				<label class="label label-primary" for="nome">
					Nome
				</label>
				<input
					type="text"
					class="form-control"
					id="nome"
					placeholder="Nome"
					onChange={nomeChangeHandler}
					style={{ margin: "15px 0", width: "50vw" }}
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
					style={{ margin: "15px 0", width: "50vw" }}
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
					style={{ margin: "15px 0", width: "50vw" }}
				/>
				<input
					type="button"
					value="Calcular"
					class="btn btn-primary"
					style={{ position: "center" }}
					onClick={calcularIMC}
				/>
			</form>

			{/* <div
				style={{
					display: "flex",
					flexWrap: "wrap",
					width: "50vw",
					alignItems: "center",
					height: "100vh",
				}}
			> */}
			{usersInfo.map((user) => {
				return (
					<CardsInfo
						info={{
							nome: user.nome,
							peso: user.peso,
							altura: user.altura,
							imc: user.imc,
						}}
					/>
				);
			})}
		</div>
		// </div>
	);
};

export default Form;
