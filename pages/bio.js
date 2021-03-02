import React from "react";
import { Text, Image, Center, Flex } from "@chakra-ui/react";

export default function BioPage() {
	return (
		<Flex
			justifyContent="space-around"
			alignItems="space-around"
			flexDir={["column", "column", "row"]}
		>
			<Center flexShrink={0} mr={["0", "0", "10px"]}>
				<Image
					src={"/photo.jpeg"}
					borderRadius="full"
					alt="Collins Chikeluba"
					w="150px"
					h="150px"
				/>
			</Center>
			<Text
				whiteSpace="pre-line"
				fontSize="1.2rem"
				fontWeight={400}
				lineHeight="1.7"
				maxW="68ch"
				ml={["0", "0", "10px"]}
			>
				<Text as="text" fontWeight={700}>
					Collins Chikeluba
				</Text>{" "}
				is a senior Computer Science major at Howard University. He has
				a lot of interest in Software development and even has some
				experience in the industry. Collins interned at PayPal Inc. for
				the summer in May 2019, and Microsoft Corp a year later. He also
				loves playing video games like Fortnite and FIFA.
			</Text>
		</Flex>
	);
}
