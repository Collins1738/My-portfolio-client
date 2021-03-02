import React from "react";
import { Box, useColorMode, Button } from "@chakra-ui/react";
import Navbar from "./navbar";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Layout({ children }) {
	const { colorMode } = useColorMode();
	return (
		<Box bg={colorMode === "light" ? "white" : "gray.900"}>
			<Navbar />
			<Box
				minH="100vh"
				mt="80px"
				maxW="900px"
				mx="auto"
				p="15px"
				pt="20px"
			>
				{children}
			</Box>
			{/* <BottomNavbar /> */}
		</Box>
	);
}

function BottomNavbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box
			as="navbar"
			pos="fixed"
			bottom="0"
			zIndex="10"
			w="100%"
			h="40px"
			display="flex"
			justifyContent="flex-end"
		>
			<Button onClick={toggleColorMode} variant="ghost">
				{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
			</Button>
		</Box>
	);
}
