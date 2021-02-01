import { extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const layerStyles = {};

const textStyles = {};

const colors = {};

const sizes = {
	"4xl": "10rem",
};

const theme = extendTheme({ config, sizes, layerStyles, textStyles, colors });
export default theme;
