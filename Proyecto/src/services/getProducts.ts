export const getProducts = async () => {
	try {
		const dataProducts = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
		console.log(dataProducts);
		return dataProducts;
	} catch (error) {
		console.log('error', error);
	}
};