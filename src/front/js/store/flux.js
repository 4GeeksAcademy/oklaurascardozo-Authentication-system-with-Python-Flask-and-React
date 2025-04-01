const getState = ({ setStore }) => {
	return {
		store: {
		
		},
		actions: {
			signup: (email, password) => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        {
                            "email": email,
                            "password": password
                        }
                    )
                };
                fetch(process.env.BACKEND_URL + '/api/signup', requestOptions)
                    .then(response => {
                        console.log(response.status);
                        if (response.status === 200){
                            setStore({ auth: true });
                        }
                        return response.json();
                    })
                    .then(data => {
                        localStorage.setItem("token", data.access_token);
                        console.log(data);
                    });
            },
			
			logout: () => {
				console.log ('logout desde flux')
				localStorage.removeItem("token");
				setStore({ auth: false });
			},
			
			login: (email, password) => {
				console.log ('LOGIN desde FLUX')
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(
						{
							"email":email,
							"password":password
						}
					)
				};
				fetch(process.env.BACKEND_URL + '/api/login', requestOptions)
					.then(response => {
						console.log (response.status)
						if (response.status == 200){
							setStore({ auth: true });
						}
						return response.json()
					})
					.then(data => {
						localStorage.setItem("token", data.access_token);
						console.log(data)
					});
			},

		}
	};
};

export default getState;