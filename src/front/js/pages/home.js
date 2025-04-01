import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import Form from "../component/form";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div 
			className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
			style={{
				background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
				padding: "2rem",
			}}
		>
			<h1 
				className="mb-3" 
				style={{
					fontSize: "3rem",
					fontWeight: "bold",
					color: "#2c3e50",
					textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
					lineHeight: "1", 
				}}
			>
				¡Bienvenido!
			</h1>
			{store.auth ? <Navigate to='/demo'/> : <Form />}
		</div>
	);
};