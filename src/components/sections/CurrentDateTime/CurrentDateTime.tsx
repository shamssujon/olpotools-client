import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import useClock from "../../../hooks/useClock";
import useDate from "../../../hooks/useDate";

const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const CurrentDateTime = () => {
	const [timezone, setTimezone] = useState(systemTimeZone);
	const displayClock = useClock(timezone);
	const displayDate = useDate(timezone);

	return (
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<VStack textAlign="center" gap="6">
						<Heading as="h4" size="md">
							Your Local Time
						</Heading>
						<VStack gap="4">
							<Heading as="h2" size="4xl">
								{displayClock}
							</Heading>
							<Text fontSize="lg">{displayDate}</Text>
						</VStack>
					</VStack>
				</Box>
			</Container>
		</Box>
	);
};

export default CurrentDateTime;
