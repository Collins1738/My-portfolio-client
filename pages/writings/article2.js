import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

export default function A2() {
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
	const imageStyles = {
		// height: "350px",
		flex: 1,
		m: "auto",
		my: "20px",
		fit: "cover",
		borderRadius: "5px",
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
			<Box key={articles[1].title} mb="100px" maxW="70ch">
				<Heading
					mb="15px"
					fontSize="1.4rem"
					fontWeight={700}
					letterSpacing="1.3px"
					maxW="60ch"
					textTransform="uppercase"
					lineHeight="1.8"
				>
					{articles[1].title}
				</Heading>
				{articles[1].image && (
					<Image
						src={articles[1].image}
						height="250px"
						flex={1}
						m="auto"
						my="15px"
						fit="cover"
					/>
				)}
				<Text {...textStyles}>
					YouTube is the biggest video streaming service, and it is
					also a place where hundreds of YouTubers make a living.
					There are 500 hours of video content uploaded to YouTube
					every minute, and I am going to show you how you can upload
					your own YouTube video!
				</Text>

				<Heading {...headingStyles}>Things you would need</Heading>

				<Text {...textStyles}>
					A laptop. A working video camera (if your laptop does not
					have a video camera)
				</Text>

				<Heading {...headingStyles}>Step 1: Record a video</Heading>

				<Text {...textStyles}>
					This can be about anything. If you do not know what to talk
					about, I suggest you talk about something you are very
					passionate about. If you still do not know what that it,
					well I suggest you just stare at the camera for 5 minutes
					and that would work as well. Open the camera app on your
					laptop. You can do that by typing “Camera” in the search
					bar.
				</Text>

				<Image src={"/article2/Picture1.png"} {...imageStyles} />

				<Text {...textStyles}>
					To the right of the screen, there are two icons. One
					represents “Picture” and the other represents “video”. Click
					the video icon to start recording your video.
				</Text>

				<Image src={"/article2/Picture2.png"} {...imageStyles} />

				<Text {...textStyles}>
					When you are done recording, click the big red icon to end
					the recording. Perfect! You have now recorded a video. I am
					sure everyone wants to watch you talk about your passion so
					let’s upload the video to YouTube!
				</Text>

				<Heading {...headingStyles}>Step 2: Sign in to Youtube</Heading>

				<Text {...textStyles}>
					Open your browser and type in{" "}
					<Text as="i">"www.youtube.com"</Text>. This should take you
					to YouTube’s home page.
				</Text>

				<Image src={"/article2/Picture3.png"} {...imageStyles} />

				<Text {...textStyles}>
					To make a YouTube video, you would have to sign in with
					Google. Click the “Sign in” button at the top right-hand
					corner. If you do not see a Sign in button, then you are
					already signed in and you can skip this step. You would get
					redirected to a Google Sign in page. Type in your email
					address and password to sign in with google. Now you are
					signed in. You are so close to being a YouTuber!
				</Text>

				<Heading {...headingStyles}>
					Step 3: Create a YouTube channel
				</Heading>
				<Text {...textStyles}>
					Click on the video plus button at the top right of your
					screen, and then click “Upload video”.
				</Text>
				<Image src="/article2/Picture4.png" {...imageStyles} />
				<Image src="/article2/Picture5.png" {...imageStyles} />
				<Text {...textStyles}>
					You should see a dialogue box asking you if you want to use
					your Google account’s name or a custom name. Any of them
					would be fine. After that you would be met with a screen
					telling you your YouTube channel has been created. Scroll
					down and click “Set Up Later”. Congratulations, you are now
					a proud owner of a YouTube channel.
				</Text>
				<Image src="/article2/Picture6.png" {...imageStyles} />
				<Heading {...headingStyles}>Step 4: Upload the video</Heading>
				<Text {...textStyles}>
					Click the Upload Video button in the middle of your screen.
					Click “Select files” button. This would bring up your
					computer’s file explorer and you should be able to see all
					your documents. Click “Videos” in the left panel of the file
					explorer and look for your recorded video. It should be the
					last thing in the box so you might have to scroll down if
					you have a lot of videos. Click the correct video and click
					“Open” in the bottom right corner of the file explorer. Your
					video will now be uploaded to YouTube. Click Next at the
					bottom right corner of the screen. Click Next again. Then
					Click Next one more time.
				</Text>
				<Image src="/article2/Picture7.png" {...imageStyles} />
				<Text {...textStyles}>
					Set your video’s visibility. Choose Public to make your
					amazing video available to the world! After choosing that
					click “Publish”.
				</Text>
				<Image src="/article2/Picture8.png" {...imageStyles} />
				<Text {...textStyles}>
					Congratulations! You have now uploaded your first YouTube
					video! Click on Facebook or Twitter in the dialogue box to
					share your YouTube video to friends and family.{" "}
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
