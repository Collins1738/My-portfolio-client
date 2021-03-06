import "../styles/globals.css";
import Layout from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
