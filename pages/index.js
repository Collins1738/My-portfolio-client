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
				borderColor={colorMode === "light" ? "teal.700" : "teal.400"}
			/>
			{renderPurpose()}
		</Box>
	);

	function renderPurpose() {
		return (
			<Box w={"100%"} mx="auto">
				<Heading size="md" fontWeight={500}>
					Purpose
				</Heading>
				<Box my="10px" />
				<Text>
					I am a senior Computer Science major at Howard University
					and this portfolio is to showcase my various projects in the
					field of computer science. I will give you a closer look to
					what I do as a Software Engineer and where I get a lot of my
					inspiration from. Enjoy!
				</Text>
			</Box>
		);
	}

	function renderHeader() {
		return (
			<Flex flexDir={["column", "row", "row"]}>
				<Flex flexDir="column" alignItems="center">
					<Image
						src={"/photo.jpeg"}
						borderRadius="full"
						alt="Collins Chikeluba"
						w="200px"
						h="200px"
					/>
					<Heading size="md">Collins Chikeluba</Heading>
					<Text>Undergraduate Software Engineer</Text>
				</Flex>
				<Flex
					flexGrow={1}
					alignItems="center"
					justifyContent="center"
					py="15px"
				>
					<Heading fontWeight={500}>Welcome to my portfolio!</Heading>
				</Flex>
			</Flex>
		);
	}
}
