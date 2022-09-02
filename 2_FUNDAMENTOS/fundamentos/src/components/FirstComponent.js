// arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
	// essa função faz isso

	return (
		<div>
			{/* algum comentario */}
			<h1>Meu primeiro componente</h1>
			<p className="teste">Meu Texto</p>
			<MyComponent />
		</div>
	);
};

export default FirstComponent;