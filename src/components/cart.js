import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import store from "../contexts/store";

export default observer(function () {
	let { cart } = useContext(store);

	return (
		<>
			<div>
				<strong>In Cart: {cart.items.length}</strong>
			</div>
			<div>
				<strong>Total: {cart.total}</strong>
			</div>
		</>
	);
});
