import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const AboutPage = () => {
  const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
		// wait for component to mount
    const timer = setTimeout(() => setAnimationStart(true), 100);

    // moving eye effect with cursor
    const followCursor = (e) => {
      const eyes = document.querySelectorAll('.eye');
      const pupils = document.querySelectorAll('.pupil');

      eyes.forEach((eye, index) => {
        if (index >= pupils.length) return;

        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        const maxRadius = Math.min(eyeRect.width, eyeRect.height) * 0.35;
        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let moveX = dx / distance * Math.min(distance, maxRadius);
        let moveY = dy / distance * Math.min(distance, maxRadius);

        if (isNaN(moveX) || isNaN(moveY)) {
          moveX = 0;
          moveY = 0;
        }

        const pupil = pupils[index];
        pupil.setAttribute('transform', `translate(${moveX}, ${moveY})`);
      });
    };

    document.addEventListener('mousemove', followCursor);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', followCursor);
    };
  }, []);

  const buttonStyles = {
    textDecoration: 'none',
    color: '#000000',
    fontFamily: 'SemiBold',
    borderRadius: '1.5rem',
    padding: '.5rem 2rem',
    background: '#ffffff',
    border: '2px solid #000000',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '2px',
		width: { xs: '150px', sm: '170px', md: '200px' },
    '&:hover': {
      background: '#000000',
      color: '#ffffff'
    }
  };

	const handleDownload = (filePath, fileName) => {
		const link = document.createElement('a');
		link.href = filePath;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

  return (
    <Box
			sx={{
				backgroundColor: '#FFFFFF', 
				minHeight: '100vh',
				'& .MuiTypography-root': {
					fontFamily: 'SemiBold',
				}
			}}
		>
      <Box
				sx={{
					textAlign: 'center',
					py: { xs: 4, md: 8 },
					px: 2,
					mx: 'auto'
      	}}
			>
        {/* SVG logo desktop with eye effect */}
				{!isMobile && (
					<Box
						sx={{
							mb: 4,
							opacity: animationStart ? 1 : 0,
							transform: animationStart ? 'translateY(0)' : 'translateY(30px)',
							transition: 'all 0.6s ease 0.2s'
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 1080 1080" fill="none">
							<path d="M675.73 851.17C658.8 855.24 635.67 858.1 621.65 848.69C608.9 840.13 604.63 822.27 603.84 818.4L506.76 214.57L393.09 232.84L489.69 833.73C491.47 846.36 502.48 905.91 555.29 942.78C574.77 956.38 604.84 969.97 647.49 969.97C664.1 969.97 682.62 967.91 703.15 962.99L822.31 933.11L794.31 821.43L675.73 851.17Z" fill="#000000"/>
							<path d="M828.648 48.4112L555.536 222.336L617.378 319.446L890.49 145.522L828.648 48.4112Z" fill="#000000"/>
							<path d="M224.6 441.5C110.42 441.5 17.52 534.4 17.52 648.58C17.52 762.76 110.42 855.66 224.6 855.66C338.78 855.66 431.68 762.76 431.68 648.58C431.68 534.4 338.78 441.5 224.6 441.5ZM224.6 763.56C161.2 763.56 109.63 711.98 109.63 648.59C109.63 585.2 161.21 533.61 224.6 533.61C287.99 533.61 339.57 585.19 339.57 648.59C339.57 711.99 287.99 763.56 224.6 763.56Z" fill="#000000" className="eye"/>
							<path d="M822.2 270.49C690.36 270.49 582.76 378.09 582.76 510.35C582.76 642.61 690.36 750.2 822.62 750.2C954.88 750.2 1062.47 642.6 1062.47 510.35C1062.47 378.1 954.87 270.49 822.62 270.49ZM822.62 650.42C745.38 650.42 682.54 587.58 682.54 510.35C682.54 433.12 745.38 370.27 822.62 370.27C899.86 370.27 962.69 433.11 962.69 510.35C962.69 587.59 899.85 650.42 822.62 650.42Z" fill="#000000" className="eye"/>
							<path d="M325.64 419.49L350.07 375.99L374.75 332.63C367.13 328.28 186.11 227.99 18.25 368.72L82.36 445.18C196.26 349.68 320.41 416.58 325.64 419.48V419.49Z" fill="#000000"/>
							<path d="M224.54 605C200.53 605 181 624.53 181 648.54C181 672.55 200.53 692.08 224.54 692.08C248.55 692.08 268.08 672.55 268.08 648.54C268.08 624.53 248.55 605 224.54 605Z" fill="#000000" className="pupil"/>
							<path d="M821.9 467C798.24 467, 779 486.25 779 509.9C779 533.55 798.25 552.8 821.9 552.8C845.55 552.8 864.8 533.55 864.8 509.9C864.8 486.25 845.55 467 821.9 467Z" fill="#000000" className="pupil"/>
						</svg>
					</Box>
				)}

        {/* logo mobile/tablet */}
				{isMobile && (
					<Box
						sx={{
							width: '150px',
							height: '150px',
							backgroundColor: '#000000',
							WebkitMask: 'url(/images/ONN_LOGO_MOBILE.svg) no-repeat center',
							mask: 'url(/images/ONN_LOGO_MOBILE.svg) no-repeat center',
							WebkitMaskSize: 'contain',
							maskSize: 'contain',
							mx: 'auto',
							mb: 3,
							opacity: animationStart ? 1 : 0,
							transform: animationStart ? 'scale(1)' : 'scale(0.8)',
							transition: 'all 0.6s ease 0.2s'
						}}
					/>
				)}

        {/* main text */}
        <Typography 
          variant="h5" 
          component="p" 
          sx={{
            mb: 3,
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            opacity: animationStart ? 1 : 0,
            transform: animationStart ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.4s ease 0.7s',
          }}
        >
          Hi, that's me Niccolò Valsecchi, <span>art director mid, motion designer</span> e <span>illustratore</span> di Milano.
        </Typography>

				{/* description - desktop */}
        {!isMobile && (
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 3,
              fontSize: '1.4rem',
              opacity: animationStart ? 1 : 0,
              transform: animationStart ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease 0.9s',
            }}
          >
            La mia carriera comincia 20 anni fa, quando all'asilo bambini e maestre mi hanno eletto con la frase
            <br />
            <span>"ma sei bravissimo a disegnare!"</span>
            <br />
            Da quel momento, ho dedicato la restante parte di vita allo sviluppo della mia creatività.
          </Typography>
        )}

        {/* description - mobile */}
        {isMobile && (
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 3,
              fontSize: '1.2rem',
              opacity: animationStart ? 1 : 0,
              transform: animationStart ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease 0.9s',
            }}
          >
            La mia carriera comincia 20 anni fa, quando all'asilo bambini e maestre mi hanno eletto con la frase
            <br />
            <span>"ma sei bravissimo a disegnare!"</span>
            <br />
            Da quel momento, ho dedicato la restante parte di vita allo sviluppo della mia creatività.
          </Typography>
        )}

        {/* CTA */}
        <Typography 
          variant="h5" 
          component="p" 
          sx={{
            mb: 4,
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            opacity: animationStart ? 1 : 0,
            transform: animationStart ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.4s ease 1.1s',
          }}
        >
          <br />
          <span>Per avermi sempre con te, scarica:</span>
        </Typography>

        {/* Buttons */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						justifyContent: 'center',
						alignItems: 'center',
						gap: 2,
					}}
				>
					<Box
						sx={{
							opacity: animationStart ? 1 : 0,
							transform: animationStart ? 'translateY(0)' : 'translateY(20px)',
							transition: 'all 0.6s ease 1.3s'
						}}
					>
						<Button 
							onClick={() => handleDownload('/pdf/Onn_NiccoloValsecchi_Cv_2025 2.pdf', 'Onn_NiccoloValsecchi_CV_2025.pdf')}
							sx={buttonStyles}
						>
							RESUME
						</Button>
					</Box>
					<Box 
						sx={{
							opacity: animationStart ? 1 : 0,
							transform: animationStart ? 'translateY(0)' : 'translateY(20px)',
							transition: 'all 0.6s ease 1.5s'
						}}
					>
						<Button 
							onClick={() => handleDownload('/pdf/ONN_PORTFOLIO23.pdf', 'ONN_PORTFOLIO23.pdf')}
							sx={buttonStyles}
						>
							PORTFOLIO
						</Button>
					</Box>
				</Box>
      </Box>
    </Box>
  );
};