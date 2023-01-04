import { Box, Container, FormControl, FormLabel, Heading, Select, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format, formatInTimeZone, utcToZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";

// time fn
function getDisplayTime(timezone) {
	return format(utcToZonedTime(new Date(), timezone), "pp");
}

// date fn
function getDisplayDate(timezone) {
	return formatInTimeZone(new Date(), timezone, "PPPP, z");
}

const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const ConvertDateTime = () => {
	const [timezone, setTimezone] = useState(systemTimeZone);
	const [clockTime, setClockTime] = useState(getDisplayTime(timezone));
	const [dateTime, setdateTime] = useState(getDisplayDate(timezone));
	const [showDateTime, setShowDateTime] = useState(false);

	// Running clock
	useEffect(() => {
		const timeInterval = setInterval(() => {
			setClockTime(getDisplayTime(timezone));
		}, 1000);

		return () => clearInterval(timeInterval);
	}, [timezone]);

	// Faching timezones
	const { data: timezones, isLoading } = useQuery({
		queryKey: ["timezones"],
		queryFn: () => axios.get("https://worldtimeapi.org/api/timezone").then((res) => res.data),
	});

	// Handling loading error
	if (isLoading) return "Loading...";

	// Handling select onChange
	const handleOnChange = (e) => {
		e.preventDefault();
		setShowDateTime(false);
		const selectedTimezone = e.target.value;
		const matchedTimezone = timezones.find((tz) => tz === selectedTimezone);
		// console.log(matchedTimezone);

		if (matchedTimezone) {
			setTimezone(matchedTimezone);
			setClockTime(getDisplayTime(matchedTimezone));
			setdateTime(getDisplayDate(matchedTimezone));
			setShowDateTime(true);
		}
	};

	return (
		<Box pb={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<VStack textAlign="center" gap="6">
						<Box as="form">
							<FormControl
								display="flex"
								flexWrap="wrap"
								justifyContent="center"
								alignItems="center"
								gap="1rem">
								<FormLabel fontSize="xl" m="0">
									See your local time in
								</FormLabel>
								<Select
									w="auto"
									minW="auto"
									// variant="unstyled"
									fontFamily="heading"
									fontWeight="bold"
									appearance="none"
									placeholder="Select timezone..."
									onChange={handleOnChange}>
									{timezones.map((timezone: string) => (
										<option key={timezone} value={timezone}>
											{timezone}
										</option>
									))}
								</Select>
							</FormControl>
						</Box>
						{showDateTime && (
							<VStack gap="4">
								<Heading as="h2" size="4xl">
									{clockTime}
								</Heading>
								<Text fontSize="lg">{dateTime}</Text>
							</VStack>
						)}
					</VStack>
				</Box>
			</Container>
		</Box>
	);
};

export default ConvertDateTime;
