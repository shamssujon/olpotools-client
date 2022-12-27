import { Box, Container, Flex, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/currex_logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
	return (
		<Box w="100%" py="4">
			<Container maxW="container.xl">
				<Flex justify="space-between">
					<Link to="/">
						<HStack>
							<Image src={logo} alt="" boxSize="60px" />
							<Text fontSize="3xl" fontWeight="700">
								CurrEx
							</Text>
						</HStack>
					</Link>
					<IconButton variant="outline" aria-label="Call Sage" fontSize="20px" icon={<RxHamburgerMenu />} />
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
