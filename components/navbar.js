import React from "react";
import { Flex, useColorMode, HStack, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
	const { colorMode } = useColorMode();
	const { asPath: currentPath } = useRouter();
	const textStyles = {
		color: "white",
		_hover: {
			color: "teal.200",
		},
		fontWeight: 400,
		fontSize: "1rem",
	};

	const marker = () => {
		return (
			<Box
				border="1px solid"
				borderColor={colorMode === "light" ? "teal.500" : "black"}
			/>
		);
	};

	return (
		<Flex
			pos="fixed"
			top="0"
			zIndex="10"
			w="100%"
			bg={colorMode === "light" ? "primary.navbar" : "teal.300"}
			h="63px"
			px="40px"
		>
			<HStack justifyContent="space-around" w="800px">
				<Box>
					<Link href="/">
						<a>
							<Text {...textStyles}>Home</Text>
						</a>
					</Link>
					{currentPath === "/" && marker()}
				</Box>
				<Box>
					<Link href="/news">
						<a>
							<Text {...textStyles}>News</Text>
						</a>
					</Link>
					{currentPath === "/news" && marker()}
				</Box>
				<Box>
					<Link href="/bio">
						<a>
							<Text {...textStyles}>Bio</Text>
						</a>
					</Link>
					{currentPath === "/bio" && marker()}
				</Box>
				<Box>
					<Link href="/usability">
						<a>
							<Text {...textStyles}>Usability</Text>
						</a>
					</Link>
					{currentPath === "/usability" && marker()}
				</Box>
				<Box>
					<Link href="/projects">
						<a>
							<Text {...textStyles}>Projects</Text>
						</a>
					</Link>
					{currentPath === "/projects" && marker()}
				</Box>
				<Box>
					<Link href="/writings">
						<a>
							<Text {...textStyles}>Writings</Text>
						</a>
					</Link>
					{currentPath === "/writings" && marker()}
				</Box>
				<Box>
					<Link href="/final-demo">
						<a>
							<Text {...textStyles}>Final Demo</Text>
						</a>
					</Link>
					{currentPath === "/final-demo" && marker()}
				</Box>
			</HStack>
		</Flex>
	);
}
