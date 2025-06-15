import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { VideoPlayer } from '@/components/VideoPlayer';
import { useTheme } from "@mui/material/styles";

const commonTypography = {
  fontFamily: "Light",
  color: "rgba(255, 255, 255, 0.3)",
  fontSize: {xs: "1.3rem", md: "1.5rem"}
};

export const ShowreelPage = () => {
	const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.main, color: '#fff' }}>
      {/* Sezione Video */}
			<Box
				sx={{
					height: {xs: "auto", md: "calc(100vh - 100px)"},
					width: "auto",
				}}
			>
				<VideoPlayer
					showControls={true}
					videoSrc="/videos/Short/ONN_LOVEREEL22.mp4"
					poster="/images/thumbnails/showreel_thumbnail.png"
				/>
			</Box>

      {/* Sezione Informazioni Showreel */}
      <Box sx={{ textAlign: 'center', mt: {xs: 1, md: 0}, px: {xs: 3, md: 0} }}>
        <Typography variant="h3" component="p" sx={{ fontFamily: "Light", fontSize: {xs: "2.5rem", md: "3rem"}}}>
          ONN
        </Typography>
        <Typography variant="h1" component="p" sx={{ fontFamily: "Light", fontSize: {xs: "2rem", md: "3rem"} }}>
          LOVEREEL 22
        </Typography>
				<Typography
          variant="body1"
          sx={{
            my: 2,
            display: { xs: 'block', md: 'none' },
            ...commonTypography,
          }}
        >
          Un insieme di alcune cosine carine <br /> che ho fatto negli anni,<br /> per evitarvi di girare per tutto il sito e trovare dei bug.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            display: { xs: 'none', md: 'block' },
            ...commonTypography,
          }}
        >
          Un insieme di alcune cosine carine che ho fatto negli anni, <br /> per evitarvi di girare per tutto il sito e trovare dei bug.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...commonTypography,
          }}
        >
          Love you.
        </Typography>
      </Box>
    </Box>
  );
};