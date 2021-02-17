import React from "react";
import { Box, Text, Image, Center } from "@chakra-ui/react";

export default function BioPage() {
	return (
		<Box>
			<Center p="10px">
				<Image
					src={"/photo.jpeg"}
					borderRadius="full"
					alt="Collins Chikeluba"
					w="200px"
					h="200px"
				/>
			</Center>
			<Text fontWeight={400}>
				<Text as="text" fontWeight={700}>
					Collins Chikeluba
				</Text>{" "}
				is a senior Computer Science major at Howard University. He has
				a lot of interest in Software development and even has some
				experience in the industry. Collins interned at PayPal Inc. for
				the summer in May 2019, and Microsoft Corp a year later. He also
				loves playing video games like Fortnite and FIFA.
			</Text>
		</Box>
	);
}
