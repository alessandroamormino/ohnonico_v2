import { Box } from '@mui/material';

export const VideoPlayer = ({ showControls = false, videoSrc, poster}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: "auto", md: "calc(100vh - 100px)" },
        backgroundColor: "#000", // Bande nere 
      }}
    >
      <video
				loading="lazy"
        preload="metadata"
        style={{ width: '100%', height: "100%" }}
        controls={showControls}
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};