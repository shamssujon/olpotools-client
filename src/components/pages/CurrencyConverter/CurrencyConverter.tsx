import React from "react";
import { Box, Container, FormControl, FormLabel, Heading, Select, Text, VStack } from "@chakra-ui/react";

const CurrencyConverter = () => {
	return (
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
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
								placeholder="Select currency...">
								<option>USD</option>
							</Select>
						</FormControl>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default CurrencyConverter;
