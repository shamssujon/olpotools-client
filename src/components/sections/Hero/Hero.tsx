import { Box, Container, Heading, Icon, LinkBox, LinkOverlay, SimpleGrid, Text } from "@chakra-ui/react";
import { BsCalendarDate, BsCurrencyExchange } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<Box textAlign="center">
						<Heading as="h1" size="2xl">
							OLPOTOOLS - makes your life easier
						</Heading>
						<Text fontSize="xl" mt="6">
							Olpotools provides various useful tools in one place that we use in our day to day life.
						</Text>
					</Box>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing="30px" mt="10">
						<LinkBox
							textAlign="center"
							bg="gray.100"
							rounded="md"
							p="8"
							_hover={{ boxShadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)" }}
							transition="all 0.1s">
							<Box>
								<Icon as={BsCurrencyExchange} fontSize="6xl" mb="4" />
								<Heading as="h5" size="md" mb="2">
									<LinkOverlay as={Link} to="/currency-converter">
										Currency Converter
									</LinkOverlay>
								</Heading>
								<Text>
									Get fast and easy calculator for converting one currency to another using the latest
									live exchange rates.
								</Text>
							</Box>
						</LinkBox>
						<LinkBox
							textAlign="center"
							bg="gray.100"
							rounded="md"
							p="8"
							_hover={{ boxShadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)" }}
							transition="all 0.1s">
							<Box>
								<Icon as={BsCalendarDate} fontSize="6xl" mb="4" />
								<Heading as="h5" size="md" mb="2">
									<LinkOverlay as={Link} to="/timezone-converter">
										Time Converter
									</LinkOverlay>
								</Heading>
								<Text>
									Find and Compare the current time in different time zones with our time converter.
								</Text>
							</Box>
						</LinkBox>
					</SimpleGrid>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
