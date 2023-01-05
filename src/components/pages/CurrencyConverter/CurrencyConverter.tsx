import {
	Box,
	Button,
	Container,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CurrencyConverter = () => {
	const [convertFrom, setConvertFrom] = useState("");
	const [convertTo, setConvertTo] = useState("");
	const [amount, setAmount] = useState(1);

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	// Fatching Currency Codes
	const { data: currencyCodesData, isLoading: loadingCurrencyCodes } = useQuery({
		queryKey: ["currencyCodesData"],
		queryFn: () => axios.get("https://openexchangerates.org/api/currencies.json").then((res) => res.data),
	});

	// Fatching Currency Exchange Rates
	const { data: exchangeRates, isLoading: loadingExchangeRates } = useQuery({
		queryKey: ["exchangeRates"],
		queryFn: () =>
			axios.get("https://api.exchangerate.host/convert?from=USD&to=BDT&amount=100").then((res) => res.data),
	});

	// Handling loading error
	if (loadingExchangeRates || loadingCurrencyCodes) return "Loading...";

	// console.log(currencyCodesData);
	// console.log(exchangeRates);

	const currencyCodes = Object.keys(currencyCodesData);
	// console.log(currencyCodes);

	const handleExchangeRates = (data) => {
		console.log(data);
	};

	return (
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<Box as="form" onSubmit={handleSubmit(handleExchangeRates)} display="grid" gap="6">
						<SimpleGrid columns={{ base: 1, md: 3 }} spacing={"6"}>
							<FormControl>
								<FormLabel mr="0" mb="2" fontWeight="bold">
									Amount
								</FormLabel>
								<Input
									type="number"
									defaultValue={amount}
									size="lg"
									{...register("amount", {
										required: "Amount is required",
									})}
								/>
								<FormErrorMessage>{errors.amount && errors.amount.message}</FormErrorMessage>
							</FormControl>
							<FormControl>
								<FormLabel mr="0" mb="2" fontWeight="bold">
									From
								</FormLabel>
								<Select
									w="auto"
									minW="auto"
									defaultValue="USD"
									size="lg"
									{...register("convertFrom", {
										required: "This is required",
									})}>
									{currencyCodes.map((code) => (
										<option key={code} value={code}>
											{code}
										</option>
									))}
								</Select>
							</FormControl>
							<FormControl>
								<FormLabel mr="0" mb="2" fontWeight="bold">
									To
								</FormLabel>
								<Select
									w="auto"
									minW="auto"
									defaultValue="BDT"
									size="lg"
									{...register("convertTo", {
										required: "This is required",
									})}>
									{currencyCodes.map((code) => (
										<option key={code} value={code}>
											{code}
										</option>
									))}
								</Select>
							</FormControl>
						</SimpleGrid>
						<Button type="submit" colorScheme="blue" size="lg">
							Convert
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default CurrencyConverter;
