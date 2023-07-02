import React, { useContext } from "react";

import store from "../contexts/store";

import { observer } from "mobx-react-lite";

export default observer(function () {
	console.log("result");
	let { cart, order } = useContext(store);

	return (
		<div>
			<h1>{order.data.name}, yout order is done!</h1>
			<hr />
			<strong>Total: {cart.total}</strong>
		</div>
	);
});
