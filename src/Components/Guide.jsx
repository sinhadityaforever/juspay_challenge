import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';

import buyIcon from '../media/buy_icon.png';
import sellIcon from '../media/sell_icon.png';
import rentIcon from '../media/rent_icon.png';
import TextsmsIcon from '@mui/icons-material/Textsms';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DevicesIcon from '@mui/icons-material/Devices';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CustomButton from './CustomButton';

const Guide = () => {
	const CustomBox = styled(Box)(({ theme }) => ({
		width: '30%',
		[theme.breakpoints.down('md')]: {
			width: '85%'
		}
	}));

	const GuidesBox = styled(Box)(({ theme }) => ({
		display: 'flex',
		justifyContent: 'space-around',
		width: '70%',
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5),
		[theme.breakpoints.down('md')]: {
			width: '100%'
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: '0',
			flexDirection: 'column'
		}
	}));

	const GuideBox = styled(Box)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing(5),
		[theme.breakpoints.down('sm')]: {
			margin: theme.spacing(2, 0, 2, 0)
		}
	}));

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<div
				style={{
					width: '5%',
					height: '5px',
					backgroundColor: '#000339',
					margin: '0 auto'
				}}
			></div>

			<Typography
				variant="h3"
				sx={{ fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3 }}
			>
				How it works?
			</Typography>

			<CustomBox>
				<Typography
					variant="body2"
					sx={{
						fontSize: '16px',
						fontWeight: '500',
						color: '#5A6473',
						textAlign: 'center'
					}}
				>
					Everything you need to know when you want to book a cab- All in one
					place
				</Typography>
			</CustomBox>

			<GuidesBox>
				<GuideBox>
					<DevicesIcon />
					<Typography
						variant="body2"
						sx={{
							fontWeight: '500',
							fontSize: '20px',
							color: '#3B3c45',
							my: 1
						}}
					>
						Enter details.
					</Typography>
				</GuideBox>

				<GuideBox>
					<TextsmsIcon />
					<Typography
						variant="body2"
						sx={{
							fontWeight: '500',
							fontSize: '20px',
							color: '#3B3c45',
							my: 1
						}}
					>
						Get cab information
					</Typography>
				</GuideBox>

				<GuideBox>
					<DirectionsCarIcon />
					<Typography
						variant="body2"
						sx={{
							fontWeight: '500',
							fontSize: '20px',
							color: '#3B3c45',
							my: 1
						}}
					>
						Cab Booking Complete
					</Typography>
				</GuideBox>
			</GuidesBox>

			<CustomButton
				backgroundColor="#0F1B4C"
				color="#fff"
				buttonText="See Full Guides"
				guideBtn={true}
			/>
		</Box>
	);
};

export default Guide;
