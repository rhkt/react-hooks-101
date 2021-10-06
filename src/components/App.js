import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import Events from "./Events";
import AppContext from "../contexts/AppContext";
import EventForm from "./EventForm";

console.log(AppContext);
const App = () => {
	const initialState = {
		events: [],
		operationLogs: [],
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<AppContext.Provider value={{ state, dispatch }}>
				<div className="container-fluid">
					<EventForm />
					<Events />
				</div>
			</AppContext.Provider>
		</>
	);
};

export default App;
