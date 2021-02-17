import React from "react";
import { Box, Text, Heading, Divider, useColorMode } from "@chakra-ui/react";

export default function News() {
	const { colorMode } = useColorMode();
	return (
		<Box>
			{articles.map((article) => {
				return (
					<Box key="title">
						<Box my="60px">
							<Heading size="lg" mb="15px">
								{article.title}
							</Heading>
							<Text
								whiteSpace="pre-line"
								fontSize="1rem"
								lineHeight="28px"
								my="14px"
							>
								{article.body}
							</Text>
						</Box>
						<Divider
							borderColor={
								colorMode === "light" ? "black" : "white"
							}
						/>
					</Box>
				);
			})}
		</Box>
	);
}

const articles = [
	{
		title: "Is Machine Learning getting out of control?",
		body:
			"Even I wish there were a simple answer to the question, but question has been lingering in the minds of several ML experts since we started seeing the true power of machine learning. A good example is the project done recently by a group of engineers at EnhanceNet. The project attempted to train a computer to unblur blurred-out images. While this seems somewhat innovative, it brings up a lot of privacy concerns. What happens to the guy that blurred out his vehicle license number before uploading a video, or the streamer that blurs out the password input bar before typing. This received a lot of negative comments and really brought to the question, is Machine Learning really getting out of control?",
	},
	{
		title: "Evinced just received huge funding of $17 million",
		body:
			"Envinced is an accessibility software company, and they help other companies improve accessibility in their sites and applications. According to the World Health Organization, there are over a billion people in the world with disabilities, which means just about one in every eight people have some form of disability. Companies must then always make sure that their software products are as accessible as possible to attract more users. Increasing software accessiblity is usually time consuming and labor intensive process but Evinced already has solutions that outperform regularly used approaches to accessibility up to 20 times. Evinced has recieved a $17 million funding which was led by Microsoft’s venture fund and Capital One Ventures and would greatly propel the work Envinced is doing in the industry.",
	},
	{
		title: "A software engineer made a bot that saves lives",
		body:
			"Huge Ma, a software engineer built a twitter bot as a side project and has gained a lot of media attention as that bot is seen as a life saver. The bot, @Turbovax, tweets whenever vaccine appointment slots open at covid-19 vaccine sites in the state of New York. Turbovax also helps schedule an appointment making the entire process smooth and easy. Turbovax has gained 21 thousand twitter followers in less than a week as New York residents scramble to access doses of the vaccines. A 65-year-old twitter user @Purrsilla has publicly expressed gratitude at Turbotax for helping them book a vaccine appointment after they had almost given up in the search for the vaccine.",
	},
	{
		title: "Microsoft’s Office experience comes to iPad",
		body:
			"The Microsoft Office app is an all-in-one Office app brings together the individual productivity apps like Word, Excel, PowerPoint into one Office app for mobile. This would be very useful for people who want to work on the go using larger-screened mobile devices like Android tablets, iPads, Surface Duo or even regular mobile devices like the Google Pixel and iPhone. Microsoft announced the office app in November 2019, and it was available for use on Androids in February 2020. iPad users, however, have not been able to use this new all-in-one app. Reasons for the delayed release of an iPad version are not known but as of today, Microsoft Office App is now available for iPad users!",
	},
	{
		title:
			"Salaries of software engineers continue to rise despite COVID-19 pandemic",
		body:
			"The tech industry has stood strong in 2020 despite the global pandemic. A lot of that results from the increased digital presence of almost everyone in the world affected by the pandemic. A lot of things that are usually done in-person have moved online increasing global use of technology. This has caused the technology industry to see huge boosts despite the global pandemic. According to reports from Rented and Vettery, the average salaries for top software engineering roles rose in all major tech hubs in the past year- by 5% in the San Francisco Bay Area, 3% in New York, 7% in Toronto and 6% in London, respectively.",
	},
];
