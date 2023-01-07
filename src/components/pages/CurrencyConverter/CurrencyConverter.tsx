import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ConversionForm from "./components/ConversionForm";
import ConversionResult from "./components/ConversionResult";

const CurrencyConverter = () => {
	const [conversionData, setConversionData] = useState({});
	const [showResult, setShowResult] = useState(false);

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	// Form submit handler
	const handleExchangeRates = (converterFormData: any) => {
		const { amount, convertFrom, convertTo } = converterFormData;

		// Fatching Currency Exchange Rates
		axios({
			url: `https://api.exchangerate.host/convert?from=${convertFrom}&to=${convertTo}&amount=${amount}`,
		}).then((res) => {
			setConversionData(res.data);
			setShowResult(true);
		});
	};

	return (
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<ConversionForm handleExchangeRates={handleExchangeRates} />

					{showResult && <ConversionResult conversionData={conversionData} />}
				</Box>
			</Container>
		</Box>
	);
};

export default CurrencyConverter;
