export const reactSelectStyles = {
	container: provided => ({
		...provided,
		width: 224
	}),
	control: provided => ({
		...provided,
		paddingLeft: 10,
		minHeight: 48
	}),
	menu: provided => ({
		...provided,
		zIndex: 2
	})
};

export const reactSelectStylesStretch = {
  ...reactSelectStyles,
  container: provided => ({
		...provided,
		...reactSelectStyles.container(),
    width: 560
	}),
	control: provided => ({
		...provided,
		...reactSelectStyles.control(),
		paddingTop: 6
	})
};