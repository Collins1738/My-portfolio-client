import {
	Box,
	Flex,
	Heading,
	Image,
	Text,
	Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

export default function WritingsPage() {
	return (
		<Box>
			<Box maxW="850px" m="auto">
				{articles.map((article) => {
					return (
						<Box key={article.title} mb="100px">
							<Heading
								mb="15px"
								fontSize="1.4em"
								fontWeight={700}
								letterSpacing="1.5px"
								maxW="60ch"
								textTransform="uppercase"
								lineHeight="1.8"
							>
								{article.title}
							</Heading>
							<Flex>
								{article.image && (
									<Image
										src={article.image}
										width="250px"
										height="250px"
										flex={1}
										m="auto"
										fit="cover"
										flex={0}
										mr="10px"
										borderRadius="5px"
									/>
								)}
								<Flex flexDir="column" flex={1} ml="10px">
									<Text
										whiteSpace="pre-line"
										fontSize="1.2rem"
										fontWeight={400}
										lineHeight="1.7"
										maxW="68ch"
										flex={1}
									>
										{article.body}
									</Text>
									<Link href="/">
										<a>
											<ChakraLink
												fontSize="1.2rem"
												fontWeight={400}
												lineHeight="1.7"
												color="teal.500"
											>
												Read more
											</ChakraLink>
										</a>
									</Link>
								</Flex>
							</Flex>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}

const articles = [
	{
		title: "The 19-billion-dollar app idea that Silicon Valley missed.",
		body:
			"Every great idea starts with a problem, and that problem was what Jan Koum encountered after he quit his job at Yahoo! to travel the world. International calls and messages were ridiculously expensive in 2007. It used to cost at least $20 to make a call from say New York to London...",
		image: "/article1/Jan-koum.jpg",
	},
	{
		title: "How to upload a YouTube video",
		body:
			"YouTube is the biggest video streaming service, and it is also a place where hundreds of YouTubers make a living. There are 500 hours of video content uploaded to YouTube every minute, and I am going to show you how you can upload your own YouTube video!",
		image: "/article2/youtube-icon.jpeg",
	},
];
