import React from "react";
import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Icon,
	IconButton,
	Image,
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsCurrencyExchange, BsCalendarDate } from "react-icons/bs";

const Hero = () => {
	return (
		// <Box pt="20" pb="80" bgGradient="linear(to-b, #6A067A, #2A0845)">
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<Box textAlign="center">
						<Heading as="h1" size="2xl">
							Convert currency and timezone
						</Heading>
						<Text fontSize="lg" mt="6">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, vitae nulla. Fugit ducimus
							tempora.
						</Text>
					</Box>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing="30px" mt="10">
						<LinkBox
							textAlign="center"
							bg="gray.100"
							rounded="md"
							p="6"
							_hover={{ boxShadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)" }}
							transition="all 0.1s">
							<Box>
								<Icon as={BsCurrencyExchange} fontSize="6xl" mb="4" />
								<Heading as="h5" size="md" mb="2">
									<LinkOverlay as={Link} to="/currency">
										Currency Converter
									</LinkOverlay>
								</Heading>
								<Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit vitae nulla.</Text>
							</Box>
						</LinkBox>
						<LinkBox
							textAlign="center"
							bg="gray.100"
							rounded="md"
							p="6"
							_hover={{ boxShadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)" }}
							transition="all 0.1s">
							<Box>
								<Icon as={BsCalendarDate} fontSize="6xl" mb="4" />
								<Heading as="h5" size="md" mb="2">
									<LinkOverlay as={Link} to="/timezone-converter">
										Timezone Converter
									</LinkOverlay>
								</Heading>
								<Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit vitae nulla.</Text>
							</Box>
						</LinkBox>
					</SimpleGrid>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
