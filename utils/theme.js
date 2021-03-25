import { extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const layerStyles = {};

const textStyles = {};

const colors = {
	primary: {
		navbar: "#1E2E30",
		backgroundFilter: "#06191C",
		background1: "#F4FFFD",
		background2: "#E6FFFA",
		background3: "#1C5D5C",
		iconForeground: "#F4FFFD",
		iconBackground: "#B8ECE5",
		textLink: "#0E8476",
		textTeal: "#1C5D5C",
		divider: "#319795",
	},
};

const fonts = {
	body: "roboto",
};

const sizes = {
	"4xl": "10rem",
};

const theme = extendTheme({
	config,
	sizes,
	layerStyles,
	textStyles,
	colors,
	fonts,
});
export default theme;
