import { styled, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import houseCard from '../media/houseCard.png';
import vector from '../media/vector.jpg';

const Details = () => {
	const CustomBox = styled(Box)(({ theme }) => ({
		display: 'flex',
		gap: theme.spacing(10),
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			textAlign: 'center'
		}
	}));

	const ImgContainer = styled(Box)(({ theme }) => ({
		width: '100%',
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		}
	}));

	const LargeText = styled(Typography)(({ theme }) => ({
		fontSize: '64px',
		color: '#000',
		fontWeight: '700',
		[theme.breakpoints.down('md')]: {
			fontSize: '32px'
		}
	}));

	const SmallText = styled(Typography)(({ theme }) => ({
		fontSize: '18px',
		color: '#7B8087',
		fontWeight: '500',
		[theme.breakpoints.down('md')]: {
			fontSize: '14px'
		}
	}));

	const TextFlexbox = styled(Box)(({ theme }) => ({
		marginTop: theme.spacing(7),
		display: 'flex',
		justifyContent: 'space-between',
		padding: theme.spacing(0, 5, 0, 5),
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: theme.spacing(5)
		}
	}));

	const Divider = styled('div')(({ theme }) => ({
		width: '13%',
		height: '5px',
		backgroundColor: '#000339',
		[theme.breakpoints.down('md')]: {
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	}));

	return (
		<Box sx={{ py: 10 }}>
			<Container>
				<CustomBox>
					<ImgContainer>
						<img src={vector} alt="house" style={{ maxWidth: '100%' }} />
					</ImgContainer>

					<Box>
						<Divider />
						<Typography
							sx={{
								fontSize: '35px',
								color: '#000339',
								fontWeight: '700',
								my: 3
							}}
						>
							You've found a cab booking platform you'd love!.
						</Typography>

						<Typography
							sx={{
								fontSize: '16px',
								color: '#5A6473',
								lineHeight: '27px'
							}}
						>
							We've eliminated the need of all extras, to make your cab booking
							experience faster than ever!
						</Typography>
					</Box>
				</CustomBox>

				<TextFlexbox>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<LargeText>2500+</LargeText>
						<SmallText>Cabs booked till now</SmallText>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<LargeText>3000+</LargeText>
						<SmallText>Places explored</SmallText>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<LargeText>3500+</LargeText>
						<SmallText>Trusted Drivers on board</SmallText>
					</Box>
				</TextFlexbox>
			</Container>
		</Box>
	);
};

export default Details;
