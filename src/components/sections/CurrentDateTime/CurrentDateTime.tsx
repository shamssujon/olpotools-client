import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import useDateTime from "../../../hooks/useDateTime";

const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const CurrentDateTime = () => {
	const [clockTime, setClockTime, dateTime] = useDateTime(systemTimeZone);

	// useEffect(() => {
	// 	setDateTime(getDisplayDate(systemTimeZone));
	// }, []);

	return (
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<VStack textAlign="center" gap="6">
						<Heading as="h4" size="md">
							Your Local Time
						</Heading>
						<VStack gap="4">
							<Heading as="h2" size={{ base: "3xl", md: "4xl" }}>
								{clockTime}
							</Heading>
							<Text fontSize={{ md: "lg" }}>{dateTime}</Text>
						</VStack>
					</VStack>
				</Box>
			</Container>
		</Box>
	);
};

export default CurrentDateTime;
