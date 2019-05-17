export const reactSelectStyles = {
	container: (provided, state) => ({
		...provided,
		width: 224
	}),
	control: provided => ({
		...provided,
		minHeight: 48
	}),
	menu: provided => ({
		...provided,
		zIndex: 2
	})
};