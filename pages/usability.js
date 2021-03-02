import React from "react";
import {
	Box,
	Text,
	Heading,
	Image,
	Flex,
	Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Usability() {
	const textStyles = {
		fontWeight: 400,
		color: "gray.700",
		fontSize: "1.2rem",
		maxW: "44rem",
		lineHeight: "1.7",
		m: "auto",
	};
	const headerStyles = {
		m: "auto",
		mb: "30px",
		fontSize: "1.8rem",
		fontWeight: 600,
		letterSpacing: "1.5px",
		maxW: "44rem",
		textTransform: "uppercase",
		lineHeight: "1.8",
	};
	const imageStyles = {
		maxW: "400px",
		my: "20px",
	};
	return (
		<Box m="auto" w="100%" overflow="hidden">
			<Heading {...headerStyles}>
				This site did not always look like this...
			</Heading>
			<Text {...textStyles}>
				When I first created this site, I did without much design
				thought. As I grew as a software engineer, I realized the site
				needed a major revamp. So, I conducted usability tests and using
				the results, I was able to transform the site from:
			</Text>
			<Flex
				justifyContent="space-between"
				flexDir={["column", "column", "row"]}
				alignItems="center"
			>
				<Image src="/old-site.jpg" {...imageStyles} />
				<Image src="/old-site2.jpg" {...imageStyles} />
			</Flex>

			<Text {...textStyles}>to: </Text>

			<Flex
				justifyContent="space-between"
				flexDir={["column", "column", "row"]}
			>
				<Image src="/new-site.jpg" {...imageStyles} />
				<Image src="/new-site2.jpg" {...imageStyles} />
			</Flex>

			<Text {...textStyles}>
				Here is the full usability report where I discuss my reasons and
				thought process behind the new design!
			</Text>
			<Box my="20px" />
			<Link href="/Collins-Chikeluba-Portfolio-Usability-report.pdf">
				<a>
					<ChakraLink display={["block", "none"]} {...textStyles}>
						View usability report <ExternalLinkIcon />
					</ChakraLink>
				</a>
			</Link>
			<Box
				display={["none", "block"]}
				m="auto"
				as="object"
				type="application/pdf"
				data="/Collins-Chikeluba-Portfolio-Usability-report.pdf"
				width="90%"
				height="700px"
				px="5px"
			/>
		</Box>
	);
}
// <Box m="auto">
// 		<object
// 			type="application/pdf"
// 			data="https://gahp.net/wp-content/uploads/2017/09/sample.pdf"
// 			width="600"
// 			height="700"
// 			margin="auto"
// 		></object>
// 	</Box>
// {
/* <Document
file="/Collins-Chikeluba-Portfolio-Usability-report.pdf"
				onLoadSuccess={({ numPages }) => {
					setNumPages(numPages);
				}}
				// width="90%"
				// margin="auto"
			>
				<Page pageNumber={pageNumber} />
				{pageNumber > 1 && (
					<Button
						onClick={() => {
							setPageNumber(pageNumber - 1);
						}}
					>
						Previous
					</Button>
				)}
				{pageNumber < numPages && (
					<Button
						onClick={() => {
							setPageNumber(pageNumber + 1);
						}}
					>
						Next
					</Button>
				)}
			</Document> */
// }
