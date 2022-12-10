import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from 'formik';
import * as React from 'react';
import { Container, Button,VStack, Heading, Text } from '@chakra-ui/react';

interface MyFormValues {
	firstName: string;
}

import Card from '../../common/Card';

const Withdraw: React.FC<{}> = () => {
	const initialValues: MyFormValues = { firstName: '' };

	return (
		<Container textAlign="center" p={0} mt="7rem" ml="21.5rem">
			<Text>Place your withdrawal sharp-sharp</Text>
			<Card>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					console.log({ values, actions });
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}}>
				<Form>
					<VStack>
					<label htmlFor="Amount">Amount</label>
					<Field
						id="Amount"
						name="Amount"
						placeholder="Enter Amount"
					/>
					<Button variant="primaryOutline" type="submit">Withdraw Now</Button>
					</VStack>
				</Form>
			</Formik>
			</Card>
			
		</Container>
	);
};

export default Withdraw;
