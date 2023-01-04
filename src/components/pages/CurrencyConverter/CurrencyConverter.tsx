import { Box, Container, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CurrencyConverter = () => {
	// Fatching Currency Codes
	const { data: currencyCodesData, isLoading: loadingCurrencyCodes } = useQuery({
		queryKey: ["currencyCodesData"],
		queryFn: () => axios.get("https://openexchangerates.org/api/currencies.json").then((res) => res.data),
	});

	// Fatching Currency Exchange Rates
	const { data: exchangeRates, isLoading: loadingExchangeRates } = useQuery({
		queryKey: ["exchangeRates"],
		queryFn: () => axios.get("https://api.exchangerate.host/convert?from=USD&to=BDT").then((res) => res.data),
	});

	// Handling loading error
	if (loadingExchangeRates || loadingCurrencyCodes) return "Loading...";

	// console.log(currencyCodesData);
	// console.log(exchangeRates);

    const currencyCodes = Object.keys(currencyCodesData)
    console.log(currencyCodes);
    

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
