import "bootstrap/dist/css/bootstrap.css";
import "./CardsInfo.css";
import React from "react";

const CardsInfo = (props) => {
	return (
		<div
			class="panel panel-default card"
			style={{ width: "300px", height: "150px" }}
		>
			<div class="panel-heading">
				<h3 class="panel-title">{props.info.nome}</h3>
			</div>
			<div class="panel-body ">
				<p>Peso: {props.info.peso}</p>{" "}
				<p>Altura: {props.info.altura}</p> <p>IMC: {props.info.imc}</p>{" "}
			</div>
		</div>
	);
};

export default CardsInfo;
