import * as React from 'react';
import {
	Select,
	InputGroup,
	InputLeftElement,
	Input,
	Container,
	Button,
	VStack,
	Flex,
	Text,
	Divider,
} from '@chakra-ui/react';
import Box from '../../common/Box';
import Searchbar from '../../common/searchbar/Searchbar';
import { useAppSelector } from '../../../app/hooks';
import Card from '../../common/Card';
import { AiOutlineDoubleRight } from 'react-icons/ai';

// // genrate a random id
// const generateId = () => {
// 	return Math.floor(Math.random() * 100000000000000000);
// };

// // generate a binary tree
// const generateTree = (depth: number, maxChildren: number) => {
// 	const node = {
// 		id: generateId(),
// 		children: [],
// 	};
// 	if (depth > 0) {
// 		const numChildren = Math.floor(Math.random() * maxChildren);
// 		for (let i = 0; i < numChildren; i++) {
// 			node.children.push(generateTree(depth - 1, maxChildren));
// 		}
// 	}
// 	return node;
// };


const FAQ = [
	{
		question: 'Getting Started',
	},
	{
		question: 'Account with Card',
	},
	{
		question: 'Withdraw to Bank',
	},
	{
		question: 'Mtn Mobile Money Integration',
	},
	{
		question: 'Bank Accounts',
	},
	{
		question: 'How do I Change my Password',
	},
	{
		question: 'How do I get paid with Fapshi',
	},
];
const FAQSection: React.FC<{}> = () => (
	<Container mt="2rem">
		<VStack justifyContent="left" alignItems="left" gap="1rem">
			{FAQ.map((item, index) => (
				<Flex
					textAlign="center"
					h="5vh"
					w="85%"
					alignItems="center"
					justifyContent="space-between">
					<Text>{item.question}</Text>
					<AiOutlineDoubleRight />
				</Flex>
			))}
		</VStack>
	</Container>
);

const SearchSection: React.FC<{}> = () => (
	<Container>
		<VStack justifyContent="left" alignItems="left" gap="1rem">
			<Text
				as="h1"
				textTransform="capitalize"
				fontWeight={600}
				fontSize="24px">
				Search for a question
			</Text>
			<Text fontWeight={400} fontSize="16px">
				Type your question or search keyword
			</Text>
			<Searchbar
				groupHeight="58px"
				paddingLeftInputLeft="5"
				heightInputLeft="50px"
				pl="4rem"
				inputHeight="50px"
				fontSize="16px"
				variant="flushed"
				inputWidth="320px"
				borderRadius="10px"
				placeholder="Start typing..."
				bg="white"
			/>
		</VStack>
	</Container>
);
const SearchAndFAQ: React.FC<{}> = () => (
	<Card variant="transparent" w="30vw" h="90vh">
		<SearchSection />
		<FAQSection />
	</Card>
);
const Support: React.FC<{}> = () => {
	const expanded: boolean = useAppSelector(
		(state: { mainSidebar: { value: boolean } }) =>
			state.mainSidebar.value
	);
	return (
		<Container
			textAlign="left"
			p={0}
			mt="0"
			ml={expanded ? '16.7rem' : '9rem'}>
			<Flex w="100vw" justifyContent="space-between">
				<Box variant="sideNav" display={expanded ? 'none' : 'block'}>
					<SearchAndFAQ />
				</Box>
				<Container mt="7rem" pt="4rem" w="50vw">
					lorem ipsum dolor kdjgoieglgsndspoid pgew pow qopg gpwbegwpj
					guiwgwepi The quick brown fox jumped over the lazy dog! The
					quick brown fox jumped over the lazy dog!
				</Container>
			</Flex>
		</Container>
	);
};

export default Support;
