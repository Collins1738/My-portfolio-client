import {
	Box,
	Heading,
	Flex,
	Image,
	Text,
	Divider,
	useColorMode,
	Button,
	Center,
	Icon,
	Circle,
	Textarea,
	Input,
} from "@chakra-ui/react";
import { CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function Home() {
	const headerStyles = {
		fontWeight: 500,
		fontSize: "1.25rem",
	};

	const textStyles = {
		fontWeight: 400,
		fontSize: "1.125rem",
		lineHeight: "169.2%",
	};
	const linkStyles = {
		...textStyles,
		color: "primary.textLink",
		as: "i",
		fontWeight: 300,
		alignSelf: "flex-end",
	};
	const dividerStyles = {
		border: "1px solid",
		borderColor: "primary.divider",
		opacity: 1,
	};

	return (
		<Box bg="primary.background1" maxW="900px">
			{renderHeader()}
			<Divider {...dividerStyles} />
			{renderSection2()}
			{renderSection3()}
			{contactMeSection()}
		</Box>
	);

	function renderSection2() {
		const purpose = () => {
			return (
				<Flex pt="40px">
					<Flex w="280px" flexGrow={0} flexShrink={0} ml="20px">
						<Center
							width="46px"
							height="46px"
							bg="primary.iconBackground"
							flexShrink={0}
							borderRadius="full"
							mx="20px"
						>
							<CheckCircleIcon color="primary.iconForeground" />
						</Center>
						<Center h="46px">
							<Text {...headerStyles}>Purpose</Text>
						</Center>
					</Flex>

					<Box flex={1}>
						<Text {...textStyles}>
							I am a senior Computer Science major at Howard
							University and this portfolio is to showcase my
							various projects in the field of computer science. I
							will give you a closer look to what I do as a
							Software Engineer and where I get a lot of my
							inspiration from. Enjoy!
						</Text>
					</Box>
					<Flex w="90px" flexGrow={0} flexShrink={0} mx="20px"></Flex>
				</Flex>
			);
		};
		const education = () => {
			return (
				<Flex pt="60px">
					<Flex w="280px" flexGrow={0} flexShrink={0} ml="20px">
						<Center
							width="46px"
							height="46px"
							bg="primary.iconBackground"
							flexShrink={0}
							borderRadius="full"
							mx="20px"
						>
							<CheckCircleIcon color="primary.iconForeground" />
						</Center>
						<Center h="46px">
							<Text {...headerStyles}>Education</Text>
						</Center>
					</Flex>
					<Flex flex={1} flexDir="column">
						<Text {...textStyles}>Computer Science major</Text>
						<Text {...textStyles}>
							Howard University, Washington DC, US
						</Text>
						<Text {...textStyles}>
							Graduation date: December 2021
						</Text>
						<Text {...textStyles} mt="20px">
							Relevant coursework: Fundamentals of Algorithms,
							Comp...
						</Text>
						<Text {...linkStyles} alignSelf="flex-end">
							Read more
						</Text>
					</Flex>
					<Flex w="90px" flexGrow={0} flexShrink={0} mx="20px">
						<Image src="/miniImages/howard.jpg" w="90px" h="90px" />
					</Flex>
				</Flex>
			);
		};
		const workExperience = () => {
			const paypal = () => {
				return (
					<Flex mb="60px">
						<Flex flex={1} flexDir="column">
							<Text {...textStyles}>
								Software Engineer Intern
							</Text>
							<Text {...textStyles}>
								PayPal Holdings Inc, San Jose CA
							</Text>
							<Text {...textStyles}>May 2019 - Aug 2019</Text>
							<Text {...textStyles} mt="20px">
								Built a test monitoring dashboard which gave
								thousands of PayPal developers the ability to
								monitor services....
							</Text>
							<Text {...linkStyles} alignSelf="flex-end">
								Read more
							</Text>
						</Flex>
						<Flex w="90px" flexGrow={0} flexShrink={0} mx="20px">
							<Image src="/miniImages/pp.jpg" w="90px" h="90px" />
						</Flex>
					</Flex>
				);
			};

			const microsoft = () => {
				return (
					<Flex mb="60px">
						<Flex flex={1} flexDir="column">
							<Text {...textStyles}>
								Software Engineer Intern
							</Text>
							<Text {...textStyles}>
								Microsoft Corporation, Bellevue WA
							</Text>
							<Text {...textStyles}>May 2020 - Aug 2020</Text>
							<Text {...textStyles} mt="20px">
								I implemented the video preview feature on the
								Microsoft Teams, that allows users see a preview
								of their video....
							</Text>
							<Text {...linkStyles} alignSelf="flex-end">
								Read more
							</Text>
						</Flex>
						<Flex w="90px" flexGrow={0} flexShrink={0} mx="20px">
							<Image src="/miniImages/ms.jpg" w="90px" h="90px" />
						</Flex>
					</Flex>
				);
			};

			return (
				<Flex pt="60px">
					<Flex w="280px" flexGrow={0} flexShrink={0} ml="20px">
						<Center
							width="46px"
							height="46px"
							bg="primary.iconBackground"
							flexShrink={0}
							borderRadius="full"
							mx="20px"
						>
							<CheckCircleIcon color="primary.iconForeground" />
						</Center>
						<Center h="46px">
							<Text {...headerStyles}>Work Experience</Text>
						</Center>
					</Flex>
					<Box>
						{paypal()}
						{microsoft()}
					</Box>
				</Flex>
			);
		};
		return (
			<Box
				w="100%"
				bg="primary.background2"
				mx="auto"
				flexDir={["column", "column", "row"]}
			>
				{purpose()}
				{education()}
				{workExperience()}
			</Box>
		);
	}

	function renderHeader() {
		return (
			<Flex flexDir={["column", "row", "row"]} bg="primary.background1">
				<Flex
					flexDir="column"
					alignItems="center"
					flexShrink={0}
					my="40px"
					ml="80px"
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
						Fullstack Software Engineer
					</Text>
				</Flex>
			</Flex>
		);
	}

	function renderSection3() {
		const headerStyles = {
			fontSize: "1.5rem",
			color: "white",
			fontWeight: 500,
		};
		const titleStyles = {
			fontSize: "1.25rem",
			fontWeight: 600,
		};
		const dateStyles = {
			fontSize: "0.9375rem",
		};
		const textStyles = {
			fontSize: "1rem",
			fontWeight: 300,
		};
		return (
			<Box bg="primary.background3" height="416px">
				<Flex py="30px" pl="40px">
					<Text {...headerStyles}>Personal projects</Text>
					<ChevronRightIcon color="white" my="auto" mx="10px" />
				</Flex>
				<Flex overflowX="scroll" className="scroller" minH="500px">
					<Box minW="40px" />
					{projects.map((project) => (
						<Flex
							mr="30px"
							minW="307px"
							h="420px"
							boxShadow="0px 8px 20px -7px rgba(0,0,0,0.13)"
							flexDir="column"
							borderRadius="5px"
							overflow="hidden"
						>
							<Image
								src={project.image}
								h="228px"
								fit="cover"
								flexShrink={0}
							/>
							<Box bg="white" flexGrow={0} p="10px">
								<Flex>
									<Text {...titleStyles}>
										{project.title}
									</Text>
									<Box
										bg="black"
										w="4px"
										h="4px"
										alignSelf="center"
										borderRadius="full"
										mx="7px"
									/>
									<Text alignSelf="center" {...dateStyles}>
										{project.date}
									</Text>
								</Flex>
								<Text {...linkStyles} fontSize="0.9375rem">
									Github
								</Text>
								<Text {...textStyles} my="10px">
									{project.description}
								</Text>
							</Box>
						</Flex>
					))}
					<Box minW="40px" />
				</Flex>
			</Box>
		);
	}

	function contactMeSection() {
		const headerStyles = {
			fontSize: "1.5rem",
			fontWeight: 500,
		};
		const helperStyles = {
			fontSize: "1rem",
			fontWeight: 400,
			as: "i",
		};
		const textStyles = {
			fontSize: "1.25rem",
			fontWeight: 500,
			color: "primary.textTeal",
		};
		return (
			<Box mt="150px" py="60px" pl="40px">
				<Text {...headerStyles}>Contact me</Text>
				<Text {...helperStyles}>Or say something nice</Text>
				<Flex>
					<Box flex={1} mt="40px">
						<Flex mb="40px">
							<Center
								width="46px"
								height="46px"
								bg="primary.iconBackground"
								flexShrink={0}
								borderRadius="full"
								mr="20px"
							>
								<CheckCircleIcon color="primary.iconForeground" />
							</Center>
							<Text {...textStyles}>(571)-398-8671</Text>
						</Flex>
						<Flex mb="40px">
							<Center
								width="46px"
								height="46px"
								bg="primary.iconBackground"
								flexShrink={0}
								borderRadius="full"
								mr="20px"
							>
								<CheckCircleIcon color="primary.iconForeground" />
							</Center>
							<Text {...textStyles}>tobechikeluba@gmail.com</Text>
						</Flex>
					</Box>

					<MessageBox alignSelf="center" mr="40px" />
				</Flex>
			</Box>
		);
	}

	function MessageBox(props) {
		const headerStyles = {
			color: "primary.textTeal",
			fontSize: "1.3125rem",
			fontWeight: 600,
		};
		const textStyles = {
			fontSize: "1rem",
			fontWeight: 400,
		};
		return (
			<Box
				bg="white"
				w="361px"
				boxShadow="0px 0px 20px -2px rgba(0,0,0,0.13)"
				borderRadius="5px"
				position="relative"
				top="-50px"
				{...props}
			>
				<Text {...headerStyles} ml="30px" py="10px">
					Send me a message
				</Text>
				<Divider {...dividerStyles} />
				<Box p="30px">
					<Box mb="40px">
						<Text {...textStyles}>Name</Text>
						<Input
							placeholder="John Smith"
							bg="#F2F2F2"
							border="0px"
							h="46px"
							mt="5px"
						/>
					</Box>
					<Box mb="40px">
						<Text {...textStyles}>Message</Text>
						<Textarea
							mt="5px"
							colorScheme="teal"
							h="121px"
							placeholder="Hi, I just wanted to let you know that your work is amazing!"
							bg="#F2F2F2"
							border="0px"
						/>
					</Box>

					<Button
						w="100%"
						h="46px"
						bg="primary.divider"
						letterSpacing="1.17px"
						color="white"
						fontWeight={400}
					>
						Send
					</Button>
				</Box>
			</Box>
		);
	}
}

const projects = [
	{
		title: "Tic-tac-toe AI",
		date: "May, 2020",
		description:
			"Python-based Artificial intelligence program that finds the optimal next move in any given position in a tic-tac-toe game",
		githubLink: "https://github/Collins1738",
		image: "/article1/Jan-koum.jpg",
	},
	{
		title: "Tic-tac-toe AI",
		date: "May, 2020",
		description:
			"Python-based Artificial intelligence program that finds the optimal next move in any given position in a tic-tac-toe game",
		githubLink: "https://github/Collins1738",
		image: "/article1/push-notifications.jpg",
	},
	{
		title: "Tic-tac-toe AI",
		date: "May, 2020",
		description:
			"Python-based Artificial intelligence program that finds the optimal next move in any given position in a tic-tac-toe game",
		githubLink: "https://github/Collins1738",
		image: "/article1/Jan-koum.jpg",
	},
	{
		title: "Tic-tac-toe AI",
		date: "May, 2020",
		description:
			"Python-based Artificial intelligence program that finds the optimal next move in any given position in a tic-tac-toe game",
		githubLink: "https://github/Collins1738",
		image: "/article1/Jan-koum.jpg",
	},
];
