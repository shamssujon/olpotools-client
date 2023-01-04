import { Box, Container, FormControl, FormLabel, Heading, Select, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import useDateTime from "../../../hooks/useDateTime";

const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const ConvertDateTime = () => {
	const [clockTime, setClockTime, dateTime, setDateTime, setTimezone, getDisplayTime, getDisplayDate] =
		useDateTime(systemTimeZone);
	const [showDateTime, setshowDateTime] = useState(false);

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
		const selectedTimezone = e.target.value;
		const matchedTimezone = timezones.find((tz) => tz === selectedTimezone);
		// console.log(matchedTimezone);

		if (matchedTimezone) {
			setTimezone(matchedTimezone);
			setClockTime(getDisplayTime(matchedTimezone));
			setDateTime(getDisplayDate(matchedTimezone));
			setshowDateTime(true);
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
								flexDir="column"
								justifyContent="center"
								alignItems="center"
								gap="1rem">
								<FormLabel m="0" fontFamily="heading" fontWeight="bold" fontSize="xl">
									See your local time in:
								</FormLabel>
								<Select
									w="auto"
									minW="auto"
									fontFamily="heading"
									fontWeight="bold"
									fontSize="lg"
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
								<Heading as="h2" size={{ base: "3xl", md: "4xl" }}>
									{clockTime}
								</Heading>
								<Text fontSize={{ md: "lg" }}>{dateTime}</Text>
							</VStack>
						)}
					</VStack>
				</Box>
			</Container>
		</Box>
	);
};

export default ConvertDateTime;
