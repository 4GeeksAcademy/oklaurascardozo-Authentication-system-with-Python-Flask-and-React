import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			{store.auth ? 
				<h1>Bienvenido de nuevo</h1>
				: <Navigate to='/'/>}
		</div>
	);
};