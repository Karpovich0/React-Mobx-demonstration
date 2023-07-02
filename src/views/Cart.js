import React, { useContext } from "react";
import CartRow from "./../components/cart-row";

import store from "../contexts/store";

import { observer } from "mobx-react-lite";

import { Link } from "react-router-dom";

export default observer(Cart);

function Cart() {
	let { cart } = useContext(store);
	let { itemsDetailed: products, total, remove, change } = cart;

	return (
		<div>
			<h1>Cart</h1>
			<hr />
			<table>
				<tbody>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Price</th>
						<th>Cnt</th>
						<th>Total</th>
						<th>Action</th>
					</tr>
					{products.map((pr, i) => (
						<CartRow key={pr.id} num={i + 1} {...pr} onChange={change} onRemove={remove} />
					))}
				</tbody>
			</table>
			<hr />
			<strong>Total: {total}</strong>
			<hr />
			<Link className="btn btn-primary" to="/order">
				Move to order
			</Link>
		</div>
	);
}
