import { Box, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { formatInTimeZone, zonedTimeToUtc, format as formatTZ, utcToZonedTime  } from 'date-fns-tz'

// Local date
const todayDate = format(new Date(), "PPPP, O");

// Local TimeZone
// const timeZone = getTimeZoneValue()
const nyDate = utcToZonedTime(new Date(), 'America/New_York')
console.log(nyDate);


// Local time fn
function getDisplayTime() {
	return format(new Date(), "hh:mm:ss a");
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
