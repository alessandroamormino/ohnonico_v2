import { Box } from '@mui/material';
import { VideoBackground } from '@/components/VideoBackground';

export const HomePage = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: 'calc(100vh - 100px)',
			}}
		>
			<VideoBackground videoSrc="/videos/Short/ONN_REEL22_CUT_5SEC_V2.mp4" link="/showreel"/>
		</Box>
	);
}