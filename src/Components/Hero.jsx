import { Box, Button, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import Navbar from './Navbar';

import heroImg from '../media/hero_illustration.png';
import cabImage from '../media/cabImage.png';
import CustomButton from './CustomButton';
import ChatBot from 'react-simple-chatbot';

const Hero = () => {
	const [isOpened, setIsOpened] = useState(false);
	const toggleFloat = () => {
		console.log('Clicked');
		setIsOpened(true);
	};
	const CustomBox = styled(Box)(({ theme }) => ({
		display: 'flex',
		justifyContent: 'center',
		gap: theme.spacing(5),
		marginTop: theme.spacing(3),
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center'
		}
	}));

	const Title = styled(Typography)(({ theme }) => ({
		fontSize: '64px',
		color: '#000336',
		fontWeight: 'bold',
		margin: theme.spacing(4, 0, 4, 0),
		[theme.breakpoints.down('sm')]: {
			fontSize: '40px'
		}
	}));

	return (
		<Box sx={{ backgroundColor: '#E6F0FF', minHeight: '80vh' }}>
			<Container>
				<Navbar />
				<CustomBox>
					<Box sx={{ flex: '1' }}>
						<Typography
							variant="body2"
							sx={{
								fontSize: '18px',
								color: '#687690',
								fontWeight: '500',
								mt: 10,
								mb: 4
							}}
						>
							Welcome to Namma Yatri.
						</Typography>
						<Title variant="h1">Find a cab in seconds.</Title>
						<Typography
							variant="body2"
							sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}
						>
							Find a cab right now or schedule one for later, without the hassle
							of signing up, or logging in every time.
						</Typography>
						<div onClick={toggleFloat}>
							<CustomButton
								backgroundColor="#0F1B4C"
								color="#fff"
								buttonText="Continue to booking"
								heroBtn={true}
							/>
						</div>
					</Box>

					<Box sx={{ flex: '1.25' }}>
						<img
							src={cabImage}
							alt="heroImg"
							style={{ maxWidth: '100%', marginBottom: '2rem' }}
						/>
					</Box>
				</CustomBox>
			</Container>
			<ChatBot
				headerTitle="Book a Cab"
				steps={[
					{
						id: 'Greet',
						message: `Welcome to Namma Yatri. I'd help you in booking a cab.`,
						trigger: 'SelectMethod'
					},
					{
						id: 'SelectMethod',
						options: [
							{
								value: 1,
								label: 'Continue here',
								trigger: 'Ask pickup location'
							},
							{ value: 2, label: 'Book on whatsapp', trigger: 'whatsapp' }
						]
					},

					{
						id: 'whatsapp',
						message: 'Sure! Give us a text on XXXXXXX to continue.',
						end: true
					},
					{
						id: 'Ask pickup location',
						message: 'Lets start by knowing your pickup location',
						trigger: 'Get pickup'
					},
					{
						id: 'Get pickup',
						user: true,
						trigger: 'Ask destination'
					},
					{
						id: 'Ask destination',
						message: 'Enter your destination address',

						trigger: 'Get destination'
					},
					{
						id: 'Get destination',
						user: true,
						trigger: 'Ask phone number'
					},
					{
						id: 'Ask phone number',
						message:
							'All looking good. Please enter your phone number. You`ll receive an OTP to verify it.',

						trigger: 'Get phone number'
					},
					{
						id: 'Get phone number',
						user: true,
						trigger: 'Ask verify code'
					},
					{
						id: 'Ask verify code',
						message: 'Enter the OTP',
						trigger: 'get verify code'
					},
					{
						id: 'get verify code',
						user: true,
						trigger: 'Verify'
					},
					{
						id: 'Verify',
						message:
							'Successfully verified your phone number. Select what type of cab you want from the available ones.',
						trigger: 'SelectCab'
					},
					{
						id: 'SelectCab',
						options: [
							{
								value: 1,
								label: 'Mini, Price ranges: (200-230)Rs',
								trigger: 'Booked'
							},
							{
								value: 2,
								label: 'Medium, Price ranges: (300-320)Rs',
								trigger: 'Booked'
							},
							{
								value: 3,
								label: 'Prime, Price ranges: (450-490)Rs',
								trigger: 'Booked'
							}
						]
					},
					{
						id: 'Booked',
						message: `We've found a nearby cab. Your driver's name is 'Rajat Kumar. The cab number is 'BR012345'. Your driver's phone number is: '+91XXXXXXXXX'. The details have been sent to your phone via SMS and Whatsapp. Thanks for booking'`,
						end: true
					}
				]}
				opened={isOpened}
				toggleFloating={() => {
					setIsOpened(!isOpened);
				}}
				floating={true}
			/>
		</Box>
	);
};

export default Hero;
