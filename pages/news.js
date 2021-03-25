import React from "react";
import { Box, Text, Heading, useColorMode, Image } from "@chakra-ui/react";

export default function News() {
	return (
		<Box
			maxW="690px"
			mx="auto"
			overflow="hidden"
			bg="primary.background1"
			borderRadius="5px"
			p="40px"
		>
			<Box maxW="68ch" m="auto">
				{articles.map((article) => {
					return (
						<Box key={article.title} mb="100px">
							<Heading
								mb="15px"
								fontSize="1.3rem"
								fontWeight={700}
								letterSpacing="1.5px"
								maxW="60ch"
								textTransform="uppercase"
								lineHeight="1.8"
							>
								{article.title}
							</Heading>
							{article.image && (
								<Image
									src={article.image}
									width="250px"
									height="250px"
									flex={1}
									m="auto"
									my="15px"
								/>
							)}
							<Text
								whiteSpace="pre-line"
								fontSize="1.2rem"
								fontWeight={400}
								lineHeight="1.7"
								maxW="68ch"
							>
								{article.body}
							</Text>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}

const articles = [
	{
		title: "Is Machine Learning getting out of control?",
		body:
			"Even I wish there were a simple answer to the question, but this question has been lingering in the minds of several ML experts since we started seeing the true power of machine learning. A good example is the project done recently by a group of engineers at EnhanceNet. The project attempted to train a computer to unblur blurred-out images. While this seems somewhat innovative, it brings up a lot of privacy concerns. What happens to the guy that blurred out his vehicle license number before uploading a video, or the streamer that blurs out the password input bar before typing. This received a lot of negative comments and really brought to the question, is Machine Learning really getting out of control?",

		image:
			"https://media.istockphoto.com/vectors/robot-machine-learning-vector-id960620460?k=6&m=960620460&s=612x612&w=0&h=y4USnfIyooNGdhTau4dNuK6CK1sZtmoZNRPET3K3v_8=",
	},
	{
		title: "Evinced just received huge funding of $17 million",
		body:
			"Envinced is an accessibility software company, and they help other companies improve accessibility in their sites and applications. According to the World Health Organization, there are over a billion people in the world with disabilities, which means just about one in every eight people have some form of disability. Companies must then always make sure that their software products are as accessible as possible to attract more users. Increasing software accessiblity is usually time consuming and labor intensive process but Evinced already has solutions that outperform regularly used approaches to accessibility up to 20 times. Evinced has recieved a $17 million funding which was led by Microsoft’s venture fund and Capital One Ventures and would greatly propel the work Envinced is doing in the industry.",

		image:
			"https://www.finsmes.com/wp-content/uploads/2021/02/evinced-440x293.jpg",
	},

	{
		title: "A software engineer made a bot that saves lives",
		body:
			"Huge Ma, a software engineer built a twitter bot as a side project and has gained a lot of media attention as that bot is seen as a life saver. The bot, @Turbovax, tweets whenever vaccine appointment slots open at covid-19 vaccine sites in the state of New York. Turbovax also helps schedule an appointment making the entire process smooth and easy. Turbovax has gained 21 thousand twitter followers in less than a week as New York residents scramble to access doses of the vaccines. A 65-year-old twitter user @Purrsilla has publicly expressed gratitude at Turbotax for helping them book a vaccine appointment after they had almost given up in the search for the vaccine.",
		image:
			"https://media-exp1.licdn.com/dms/image/C5603AQE5QtKjxxhi7Q/profile-displayphoto-shrink_800_800/0/1517703462051?e=1620259200&v=beta&t=G1NklTzBNCNvQvNk2p7L2rrz5v3iuk5OHMpBmJFytpw",
	},
	{
		title: "Microsoft’s Office experience comes to iPad",
		body:
			"The Microsoft Office app is an all-in-one Office app brings together the individual productivity apps like Word, Excel, PowerPoint into one Office app for mobile. This would be very useful for people who want to work on the go using larger-screened mobile devices like Android tablets, iPads, Surface Duo or even regular mobile devices like the Google Pixel and iPhone. Microsoft announced the office app in November 2019, and it was available for use on Androids in February 2020. iPad users, however, have not been able to use this new all-in-one app. Reasons for the delayed release of an iPad version are not known but as of today, Microsoft Office App is now available for iPad users!",

		image:
			"https://www.imore.com/sites/imore.com/files/styles/w830_wm_brw/public/field/image/2014/02/office_ipad_mini_wood_hero.jpg?itok=onIPY_N3",
	},
	{
		title:
			"Salaries of software engineers continue to rise despite COVID-19 pandemic",
		body:
			"The tech industry has stood strong in 2020 despite the global pandemic. A lot of that results from the increased digital presence of almost everyone in the world affected by the pandemic. A lot of things that are usually done in-person have moved online increasing global use of technology. This has caused the technology industry to see huge boosts despite the global pandemic. According to reports from Rented and Vettery, the average salaries for top software engineering roles rose in all major tech hubs in the past year- by 5% in the San Francisco Bay Area, 3% in New York, 7% in Toronto and 6% in London, respectively.",
	},
];
