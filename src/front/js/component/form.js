import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Form = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        console.log('send data');
        console.log(email, password);
        actions.login(email, password);
    }

    function handleRegister(e) {
        e.preventDefault();
        console.log('send data');
        console.log(email, password);
        actions.signup(email, password);
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div 
                className="card shadow-lg p-4 mt-0" 
                style={{ 
                    maxWidth: "400px", 
                    width: "100%",
                }}
            >
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Correo Electrónico</label>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Ingresa tu email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Contraseña</label>
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary px-4">Iniciar Sesión</button>
                        <button type="button" className="btn btn-outline-primary px-4" onClick={handleRegister}>Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;