const Challenge = () => {
	const a = 5;
	const b = 10;

	const handleSoma = (a, b) => {
		console.log(a + b);
	};

	return(
		<div>
			<p>Primeiro Valor: {a}</p>
			<p>Segundo Valor: {b}</p>
			<button onClick={() => handleSoma(a, b)}>Somar</button>
		</div>
	);
};

export default Challenge;