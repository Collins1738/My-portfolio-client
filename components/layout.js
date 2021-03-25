import React from "react";
import { Box, useColorMode, Button, Image, Flex } from "@chakra-ui/react";
import Navbar from "./navbar";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function MyImage() {
	const randNum = Math.floor(Math.random() * 21);
	return (
		<Image
			src={`/bgImages/${randNum}.jpeg`}
			w="362px"
			h="304px"
			fit="cover"
			flexShrink={0}
		/>
	);
}
export default function Layout({ children }) {
	const { colorMode } = useColorMode();
	return (
		<Box
			bg={colorMode === "light" ? "white" : "gray.900"}
			overflow="scroll"
			pos="relative"
		>
			<Box
				maxH="100vh"
				minH="100vh"
				pos="fixed"
				bg="primary.background3"
				w="100vw"
			>
				<Box>
					{Array.from({ length: 5 }).map((_) => (
						<Flex>
							{Array.from({ length: 5 }).map((_) => (
								<MyImage />
							))}
						</Flex>
					))}
				</Box>
			</Box>
			<Box
				maxH="100vh"
				minH="100vh"
				pos="fixed"
				bg="primary.backgroundFilter"
				opacity="78%"
				w="100vw"
			></Box>
			<Box
				maxW="900px"
				mt="80px"
				mx="auto"
				// bg="white"
				pos="relative"
				// border="2px solid"
				mb="40px"
				borderRadius="5px"
				overflow="hidden"
			>
				{children}
			</Box>
			<Navbar />
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
