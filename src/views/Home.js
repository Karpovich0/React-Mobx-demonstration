import React, { useContext } from "react";

import store from "../contexts/store";

import { observer } from "mobx-react-lite";

import ProductCard from "./../components/products/card";

export default observer(Home);

function Home() {
	let {
		products: { products },
		cart,
	} = useContext(store);
	let { inCart, inProccess, add, remove } = cart;

	return (
		<div>
			<h1>Catalog</h1>
			<hr />
			<div className="row">
				{products.map((pr) => (
					<div className="col col-4 mb-3 mt-3" key={pr.id}>
						<ProductCard
							product={pr}
							inCart={inCart(pr.id)}
							pending={inProccess(pr.id)}
							onAdd={add}
							onRemove={remove}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
