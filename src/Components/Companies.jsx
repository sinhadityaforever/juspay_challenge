import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react';
import logoImg from '../media/logo.png';
import starsImg from '../media/Star.png';

const Companies = () => {
	const CustomContainer = styled(Container)(({ theme }) => ({
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			marginBottom: theme.spacing(4)
		}
	}));

	const CustomBox = styled(Box)(({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			marginBottom: theme.spacing(4)
		}
	}));

	return (
		<Box sx={{ mt: 10 }}>
			<CustomContainer>
				<CustomBox>
					<img src={logoImg} alt="logo" style={{ width: '10rem' }} />
					<Typography
						variant="body2"
						sx={{
							color: '#7D8589',
							fontSize: '16px',
							fontWeight: 'bold',
							mt: 2
						}}
					>
						More than 45,000 trust Namma Yatri
					</Typography>
				</CustomBox>

				<Box>
					<img src={starsImg} alt="stars" style={{ maxWidth: '100%' }} />
					<Typography
						variant="body2"
						sx={{
							color: '#7D8589',
							fontSize: '16px',
							fontWeight: 'bold',
							mt: 2,
							mb: 5
						}}
					>
						5-Star Rating (2k+ Reviews)
					</Typography>
				</Box>
			</CustomContainer>
		</Box>
	);
};

export default Companies;
