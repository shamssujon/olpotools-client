import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const dt = DateTime.now();

// Local date
const todayDate = dt.toLocaleString(DateTime.DATETIME_FULL);

// Local time fn
function getDisplayTime() {
	return DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS);
}

const CurrentDateTime = () => {
	const [clockTime, setClockTime] = useState(getDisplayTime());

	useEffect(() => {
		const timeInterval = setInterval(() => {
			setClockTime(getDisplayTime());
		}, 1000);

		return () => clearInterval(timeInterval);
	}, []);

	return (
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<VStack textAlign="center" gap="6">
						<Heading as="h4" size="md">
							Your Local Time
						</Heading>
						<Heading as="h2" size="4xl">
							{clockTime}
						</Heading>
						<Text fontSize="lg">{todayDate}</Text>
					</VStack>
				</Box>
			</Container>
		</Box>
	);
};

export default CurrentDateTime;
