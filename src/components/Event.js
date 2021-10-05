import React from "react";

const Event = ({ event, dispatch }) => {
	const handleClickDeleteButton = () => {
		const result = window.confirm(`ID_${event.id}を削除して良いですか？`);
		if (result) {
			dispatch({ type: "DELETE_EVENT", id: event.id });
			console.log("削除");
		}
	};
	return (
		<tr>
			<td>{event.id}</td>
			<td>{event.title}</td>
			<td>{event.body}</td>
			<td>
				<button
					type="button"
					className="btn btn-danger"
					onClick={handleClickDeleteButton}
				>
					削除
				</button>
			</td>
		</tr>
	);
};
export default Event;
