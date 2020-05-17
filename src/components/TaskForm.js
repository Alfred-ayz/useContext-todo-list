import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
	const { addTask, clearList, editTask, editItem } = useContext(
		TaskListContext
	);
	const [title, setTitle] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (editItem === null) {
			addTask(title);
			setTitle("");
		} else {
			editTask(title, editItem.id);
		}
	};
	const handleChange = (e) => {
		setTitle(e.target.value);
	};
	useEffect(() => {
		if (editItem !== null) {
			setTitle(editItem.title);
			console.log(editItem.title);
		} else {
			setTitle("");
		}
	}, [editItem]);
	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				type="text"
				className="task-input"
				value={title}
				placeholder="Add Task"
				onChange={handleChange}
				required
			/>
			<div className="buttons">
				<button type="submit" className="btn add-task-btn">
					{editItem ? "Edit Task" : "Add Task"}
				</button>
				<button
					type="submit"
					className="btn clear-btn"
					onClick={clearList}
				>
					Clear
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
