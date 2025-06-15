import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const VideoBackground = ({ videoSrc, overlayContent, link }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (link) {
			navigate(link);
		}
	};

  return (
    <Box
			onClick={handleClick}
			sx={{
				cursor: link ? 'pointer' : 'default',
				width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000'
			}}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {overlayContent && (
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
          }}
        >
          {overlayContent}
        </Box>
      )}
    </Box>
  );
};