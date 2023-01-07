import { HStack, Text } from "@chakra-ui/react";

const ConversionResult = ({conversionData}) => {
	return (
		<HStack align="center">
			<Text fontSize={{ md: "lg", lg: "xl" }} gap={6}>
				{conversionData?.query?.amount} {conversionData?.query?.from} =
			</Text>
			<Text fontSize={{ md: "md", lg: "3xl" }} gap={6}>
				{conversionData?.result} {conversionData?.query?.to}
			</Text>
		</HStack>
	);
};

export default ConversionResult;
