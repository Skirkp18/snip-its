import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Snipits from "./pages/Snipits";
import { Container } from "./components/Grid";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Head from "./components/Head";
import userAPI from "./utils/userAPI";
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
	const [userState, setUserState] = useState({});

	function Redirect() {
		window.location.href = "/snipits"
	}

   useEffect(() => { 
	   // auth user on first render
	  authenticate() 
	  
   }, []);

	//user authentication
	function authenticate() {
		return userAPI.authenticateUser()
			.then(({ data }) => {
			console.log('user:', data );
			setUserState(data);
			})
			.catch((err) => console.log('registered user:', err.response));
	}

	return (
		<Router>
			<Head />
			<Container fluid>
				<Switch>
					<Route
						exact
						path='/'
						render={ props => (
							<Login
								{...props}
								userState={userState}
								setUserState={setUserState}
							/>
						)}
					/>
					<Route
						exact
						path='/signup'
						render={ props => (
							<Signup
								{...props}
								authenticate={authenticate}
								user={userState}
							/>
						)}
					/>
               <ProtectedRoute exact path={["/", "/snipits"]} type="private">
                  <Snipits {...userState} />
               </ProtectedRoute>
               <ProtectedRoute path={["/", "/dashboard"]} type="private">
                  <Dashboard {...userState} />
               </ProtectedRoute>
					<Route component={NoMatch} />
				</Switch>
			</Container>
			{/* {userState.email ? <Redirect to="/dashboard"/>: <></>} */}
		</Router>
	);
}

export default App;
