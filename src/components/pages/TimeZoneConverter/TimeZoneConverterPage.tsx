import { Box, Container, Heading, Text } from "@chakra-ui/react";

const TimeZoneConverterPage = () => {
	return (
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<Box textAlign="center">
						<Heading as="h4" size="md" mb="4">
							Current Time
						</Heading>
						<Heading as="h2" size="4xl">
							12:33 PM
						</Heading>
						<Text fontSize="lg" mt="6">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, vitae nulla. Fugit ducimus
							tempora.
						</Text>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default TimeZoneConverterPage;
