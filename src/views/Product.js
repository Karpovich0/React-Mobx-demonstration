import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import store from "../contexts/store";

import { Link, useParams } from "react-router-dom";
import E404 from "./E404";

export default observer(Product);

function Product() {
	let { id } = useParams();
	let { products, cart } = useContext(store);
	let product = products.item(id);

	if (!/^[1-9]+\d*$/.test(id) || product === undefined) {
		return <E404 />;
	}

	return (
		<>
			<h1>{product.title}</h1>
			<hr />
			<div>
				<strong>Price: {product.price}</strong>
			</div>
			<hr />
			<Link to="/">Back to catalog</Link>
			<hr />
			{cart.inCart(product.id) ? (
				<button onClick={() => cart.remove(product.id)} type="button" className="btn btn-danger">
					Remove item
				</button>
			) : (
				<button onClick={() => cart.add(product.id)} type="button" className="btn btn-success">
					Add to cart
				</button>
			)}
		</>
	);
}
