import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";

export default function A1() {
	const textStyles = {
		whiteSpace: "pre-line",
		fontSize: "1.2rem",
		fontWeight: 400,
		lineHeight: "1.9",
		maxW: "68ch",
	};
	const headingStyles = {
		mt: "30px",
		fontSize: "1.4rem",
		fontWeight: 700,
		maxW: "60ch",
		lineHeight: "1.8",
	};
	return (
		<Box
			maxW="690px"
			mx="auto"
			overflow="hidden"
			bg="primary.background1"
			borderRadius="5px"
			p="40px"
		>
			<Box key={articles[0].title} mb="100px" maxW="70ch">
				<Heading
					mb="15px"
					fontSize="1.4rem"
					fontWeight={700}
					letterSpacing="1.3px"
					maxW="60ch"
					textTransform="uppercase"
					lineHeight="1.8"
				>
					{articles[0].title}
				</Heading>
				{articles[0].image && (
					<Image
						src={articles[0].image}
						height="250px"
						flex={1}
						m="auto"
						my="15px"
						fit="cover"
					/>
				)}
				<Text {...textStyles}>
					The 19-billion-dollar app idea that no one wanted to make.
					Every great idea starts with a problem, and that problem was
					what Jan Koum encountered after he quit his job at Yahoo! to
					travel the world. International calls and messages were
					ridiculously expensive in 2007. It used to cost at least $20
					to make a call from say New York to London. It was even more
					expensive in less civilized countries. So, when Jan Koum was
					in South America on vacation, he always found it difficult
					to communicate to his friends in the US. Koum’s solution to
					this problem was WhatsApp 1.0.
				</Text>
				<Heading {...headingStyles}>WhatsApp 1.0</Heading>
				<Text {...textStyles}>
					In 2009, Koum and his former colleague at Yahoo!, Brian
					Acton, launched WhatsApp. Before people made calls, they
					would usually have to text “hey, are you free to talk?”, and
					these little SMS messages costs a lot when you were
					overseas. The very first version of WhatsApp, WhatsApp 1.0,
					was an app that displayed a user’s status on mobile phones.
					So you could update your WhatsApp status to “Going out for a
					bit” and if someone wanted to call you, rather than send an
					SMS message to ask if you’re available to talk, they can
					check your WhatsApp status. That was WhatsApp 1.0, and it
					failed horribly.
				</Text>
				<Heading {...headingStyles}>Push notifications</Heading>
				<Image
					src={"/article1/push-notifications.jpg"}
					// width="250px"
					height="350px"
					flex={1}
					m="auto"
					my="20px"
					fit="cover"
					flex={0}
					borderRadius="5px"
				/>
				<Text {...textStyles}>
					In June 2009, Apple introduced push notifications, and it
					was WhatsApp’s knight in shining armor. The main problem
					with WhatsApp 1.0 was the numerous steps it took to check
					your friend’s status. You had to open WhatsApp, log into the
					app, check on your friend’s status, then you leave the app
					and then make the call or not depending on your friend’s
					status. You had to do that every time you wanted to call
					someone, and it was simply too much work. But push
					notifications changed the entire game. Koum recognized the
					opportunity with push notifications and soon realized how he
					could adapt this feature into WhatsApp’s model. Not too long
					after, he launched WhatsApp 2.0
				</Text>
				<Flex my="40px">
					<Box w="10px" h="150px" mr="10px" bg="teal.500"></Box>
					<Text {...textStyles} as="i" color="teal.800">
						“We noticed that people would use the status to
						communicate with each other. They would change the
						status to say something like, ‘I’m going to a bar.’ And
						the change in status would broadcast to all the other
						people who used WhatsApp in your address book.”
					</Text>
				</Flex>
				<Heading {...headingStyles}>WhatsApp 2.0</Heading>
				<Text {...textStyles}>
					WhatsApp 2.0 made use of the push notifications feature in
					iPhones. Now if a user updated their status to “off to the
					gym” everyone with their contact that also had WhatsApp
					would be notified. It made for great conversation starters.
					Adding the additional messaging feature was almost a
					formality. Now not only could users update their status to
					update all their friends of their availability, but they
					could also send direct messages to their friends over the
					internet. WhatsApp’s user base grew to about 250,000 within
					the first month of launch. Their userbase continued to grow
					exponentially but that is not even the end of the story.
				</Text>
				<Heading {...headingStyles}>
					No one cared about the larger market
				</Heading>
				<Text {...textStyles}>
					WhatsApp 2.0 was originally launched only on iPhones and
					though it was successful on the Apple App Store, it would
					not be the messaging giant it is today from iPhone users
					alone. iPhone users were mostly from the US, people from
					other countries used Samsung or Nokia or Blackberry. The US
					market already had flat rates for SMS messaging, but other
					countries had a per-message SMS rate that was very harsh.
					Also, American’s did not travel abroad a lot compared to
					Europeans and Asians, and so they rarely had family or
					friends they had to talk to abroad. It was clear that there
					was a huge need for over-internet messaging in other
					countries and so in non-iPhones so why wasn’t anyone in
					Silicon Valley building messaging platforms for Samsung or
					Nokia or Blackberry. Well, it was a running saying that
					Android users were less willing to pay or spend money on the
					platform and it was slightly more difficult to build on
					Androids. Because of this, Silicon Valley CEOs kept to
					iPhone markets. Instead of playing along with Silicon
					Valley’s iPhone-first agenda, Jan Koum and his team quickly
					built WhatsApp versions for non-Apple devices. Koum launched
					WhatsApp on Android in August 2010 and launched WhatsApp on
					Nokia a year after. The results were incredible. WhatsApp
					2.0 saw its user base grow by 300,000 users per day. In
					February 2014, Facebook bought WhatsApp for $19 billion.
				</Text>
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
		link: "/writings/article1",
	},
	{
		title: "How to upload a YouTube video",
		body:
			"YouTube is the biggest video streaming service, and it is also a place where hundreds of YouTubers make a living. There are 500 hours of video content uploaded to YouTube every minute, and I am going to show you how you can upload your own YouTube video!",
		image: "/article2/youtube-icon.jpeg",
		link: "/writings/article2",
	},
];
