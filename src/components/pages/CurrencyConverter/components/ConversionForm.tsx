import {
	Alert,
	AlertIcon,
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	amount: number;
	convertFrom: string;
	convertTo: string;
};

const ConversionForm = ({ handleExchangeRates }) => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<Inputs>();

	// Fatching Currency Codes
	const { data: currencyCodesData, isLoading: loadingCurrencyCodes } = useQuery({
		queryKey: ["currencyCodesData"],
		queryFn: () => axios.get("https://openexchangerates.org/api/currencies.json").then((res) => res.data),
	});

	// Handling loading error
	if (loadingCurrencyCodes) return "Loading...";

	// const currencyCodes = Object.keys(currencyCodesData);
	const currencyNames = Object.values(currencyCodesData);
	const currencyCodes = Object.entries(currencyCodesData);
	// console.log(currencyCodesData);
	// console.log(currencyNames);
	// console.log(entries);

	return (
		<Box as="form" onSubmit={handleSubmit(handleExchangeRates)} display="grid" gap="6">
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
				<FormControl isInvalid={errors.amount}>
					<FormLabel mr="0" mb="2" fontWeight="bold">
						Amount
					</FormLabel>
					<Input
						type="number"
						defaultValue={1}
						size={{ base: "md", md: "lg" }}
						{...register("amount", {
							required: {
								value: true,
								message: "Amount is required",
							},
						})}
					/>
					{/* <FormErrorMessage>{errors.amount && errors.amount.message}</FormErrorMessage> */}
					{errors?.amount && <FormErrorMessage>{errors?.amount?.message}</FormErrorMessage>}
				</FormControl>
				<FormControl>
					<FormLabel mr="0" mb="2" fontWeight="bold">
						From
					</FormLabel>
					<Select
						w="auto"
						minW="auto"
						defaultValue="USD"
						size={{ base: "md", md: "lg" }}
						{...register("convertFrom", {
							required: "This is required",
						})}>
						{currencyCodes.map((code) => (
							<option key={code} value={code[0]}>
								{code[0]} - {code[1]}
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
						size={{ base: "md", md: "lg" }}
						{...register("convertTo", {
							required: "This is required",
						})}>
						{currencyCodes.map((code) => (
							<option key={code} value={code[0]}>
								{code[0]} - {code[1]}
							</option>
						))}
					</Select>
				</FormControl>

				<Alert status="info" gridColumn={{ md: "span 2" }} fontSize="xs" bg={"transparent"} p="0">
					<AlertIcon />
					We use the mid-market rate for our Converter. This is for informational purposes only. You won't
					receive this rate when sending money.
				</Alert>

				<Button type="submit" colorScheme="blue" size="lg" gridColumnStart={{ base: 1, md: 3 }}>
					Convert
				</Button>
			</SimpleGrid>
		</Box>
	);
};

export default ConversionForm;
