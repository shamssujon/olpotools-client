import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Collapse,
	Container,
	Flex,
	HStack,
	Icon,
	IconButton,
	Image,
	Link,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import logo from "../../../assets/images/currex_logo.svg";

const Navbar = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box py={{ base: 2 }} borderBottom="1px" borderStyle={"solid"} borderColor="gray.200" bg="white">
			<Container maxW="container.xl">
				<Flex minH={"60px"} align="center">
					<Flex flex={{ base: 1 }} justify="space-between">
						<Link as={RouterLink} to="/">
							<HStack gap="1">
								<Image src={logo} alt="" w={{ base: "150px", md: "200px" }} />
								{/* <Text fontFamily="heading" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" textTransform="uppercase">
									OlpoTools
								</Text> */}
							</HStack>
						</Link>

						<Flex display={{ base: "none", md: "flex" }} ml={10}>
							<DesktopNav />
						</Flex>
					</Flex>

					<Flex display={{ base: "flex", md: "none" }}>
						<IconButton
							onClick={onToggle}
							icon={isOpen ? <CloseIcon w="5" h="5" /> : <HamburgerIcon w="8" h="8" />}
							variant={"ghost"}
							aria-label={"Toggle Navigation"}
						/>
					</Flex>
				</Flex>
			</Container>
			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
};

const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	return (
		<Stack direction={"row"} spacing={4} align="center">
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								as={NavLink}
								end
								to={navItem.href ?? "#"}
								_activeLink={{ fontWeight: "bold" }}
								p={2}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								minW={"sm"}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Link
			href={href}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("pink.50", "gray.900") }}>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
						{label}
					</Text>
					<Text>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
					justify={"flex-end"}
					align={"center"}
					flex={1}>
					<Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={NavLink}
				to={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}>
				<Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: "Currency Converter",
		href: "/currency",
	},
	{
		label: "Time Converter",
		href: "/time",
	},
	{
		label: "Blog",
		href: "/blog",
	},
];

export default Navbar;
