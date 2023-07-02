import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import store from "../contexts/store";

import { Link, useNavigate } from "react-router-dom";

export default observer(function () {
	console.log("order");
	const navigate = useNavigate();
	let { order } = useContext(store);

	let sendForm = () => {
		order.send();
		navigate("/result");
	};

	return (
		<div>
			<h1>Input data</h1>
			<hr />
			<form>
				{order.form.map((field) => (
					<div className="form-group" key={field.name}>
						<label>{field.label}</label>
						<input
							type="text"
							className={`form-control ${
								field.value.length && !field.valid ? "border border-danger" : ""
							}`}
							name={field.name}
							value={field.value}
							onChange={(e) => order.update(field.name, e.target.value.trim())}
						/>
					</div>
				))}
			</form>
			<hr />
			<Link to="/" className="btn btn-warning">
				Back to cart
			</Link>
			<button type="button" className="btn btn-success" onClick={sendForm} disabled={!order.formValid}>
				Send
			</button>
		</div>
	);
});
