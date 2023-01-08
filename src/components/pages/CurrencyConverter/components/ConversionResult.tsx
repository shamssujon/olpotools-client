import { Box, Flex, Text } from "@chakra-ui/react";

const ConversionResult = ({ conversionData }) => {
	console.log(conversionData);

	const { query, result, date, info } = conversionData;

	return (
		<Box mt={6}>
			<Flex align="center" gap={2} flexWrap="wrap">
				<Text fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
					{query.amount} {query.from}
				</Text>
				<Text fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>=</Text>
				<Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
					{result} {query.to}
				</Text>
			</Flex>
			{query?.amount > 1 && (
				<Text>
					1 {query.from} = {info.rate} {query.to}
				</Text>
			)}
			<Text>Conversion date: {date}</Text>
		</Box>
	);
};

export default ConversionResult;
