import React from "react";
import {
	Flex,
	Spacer,
	useColorMode,
	HStack,
	Box,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex
			as="navbar"
			pos="fixed"
			top="0"
			zIndex="10"
			w="100%"
			bg={colorMode === "light" ? "teal.700" : "teal.300"}
			h="80px"
			px="40px"
		>
			<HStack spacing={2}>
				<Box w="90px">
					<Link href="/">
						<a>
							<Text
								color={
									colorMode === "light" ? "white" : "black"
								}
							>
								Home
							</Text>
						</a>
					</Link>
				</Box>

				<Box w="90px">
					<Link href="/news">
						<a>
							<Text
								color={
									colorMode === "light" ? "white" : "black"
								}
							>
								News
							</Text>
						</a>
					</Link>
				</Box>
				<Box w="90px">
					<Link href="/bio">
						<a>
							<Text
								color={
									colorMode === "light" ? "white" : "black"
								}
							>
								Bio
							</Text>
						</a>
					</Link>
				</Box>
				<Box w="90px">
					<Link href="/usability">
						<a>
							<Text
								color={
									colorMode === "light" ? "white" : "black"
								}
							>
								Usability
							</Text>
						</a>
					</Link>
				</Box>
				<Box w="90px">
					<Link href="/projects">
						<a>
							<Text
								color={
									colorMode === "light" ? "white" : "black"
								}
							>
								Projects
							</Text>
						</a>
					</Link>
				</Box>
				<Box w="90px">
					<Link href="/final-demo">
						<a>
							<Text
								color={
									colorMode === "light" ? "white" : "black"
								}
							>
								Final Demo
							</Text>
						</a>
					</Link>
				</Box>
			</HStack>

			<Spacer />
		</Flex>
	);
}
// <Link>News </Link>
// 			<Link>Bio</Link>
// 			<Link>Usability Report</Link>
// 			<Link>Project Showcasing</Link>
// 			<Link>Final Demonstration</Link>
