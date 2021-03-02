import {
	Box,
	Heading,
	Flex,
	Image,
	Text,
	Divider,
	useColorMode,
} from "@chakra-ui/react";

export default function Home() {
	const { colorMode } = useColorMode();
	return (
		<Box>
			{renderHeader()}
			<Divider
				my="20px"
				border="1px solid"
				borderColor={colorMode === "light" ? "teal.500" : "teal.400"}
				opacity={1}
			/>
			{renderPurpose()}
		</Box>
	);

	function renderPurpose() {
		return (
			<Flex w={"100%"} mx="auto" flexDir={["column", "column", "row"]}>
				<Heading
					size="md"
					fontWeight={500}
					flex={1}
					mx="10px"
					mb={["10px"]}
					fontSize={["1rem", "1.2rem"]}
				>
					Purpose
				</Heading>
				<Text
					fontWeight={400}
					color="gray.700"
					fontSize={["1rem", "1.2rem"]}
					maxW="60ch"
					flexShrink={0}
					mx="10px"
					lineHeight="1.7"
				>
					I am a senior Computer Science major at Howard University
					and this portfolio is to showcase my various projects in the
					field of computer science. I will give you a closer look to
					what I do as a Software Engineer and where I get a lot of my
					inspiration from. Enjoy!
				</Text>
			</Flex>
		);
	}

	function renderHeader() {
		return (
			<Flex flexDir={["column", "row", "row"]}>
				<Flex
					flexDir="column"
					alignItems="center"
					flexShrink={0}
					mx="10px"
				>
					<Image
						src={"/photo.jpeg"}
						borderRadius="full"
						alt="Collins Chikeluba"
						w="200px"
						h="200px"
					/>
				</Flex>
				<Flex
					flexGrow={1}
					alignItems="center"
					justifyContent="center"
					py="15px"
					flexDir="column"
					mx="10px"
				>
					<Heading
						fontWeight={400}
						mb="10px"
						fontSize={["2.5rem", "3rem"]}
					>
						Collins Chikeluba
					</Heading>
					<Text fontWeight={400} fontSize="1.1rem" as="i">
						Undergraduate Software Engineer
					</Text>
				</Flex>
			</Flex>
		);
	}
}
