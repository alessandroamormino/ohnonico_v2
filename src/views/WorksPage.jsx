import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { WorkCard } from '@/components/WorkCard';

export const WorksPage = () => {
    const theme = useTheme();
    return (
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
					width: "100%"
				}}
			>
				{/* full */}
				<Box sx={{
					gridColumn: { xs: "1", md: "1 / -1" },
					height: {xs: "200px", md: "500px"}
				}}>
					<WorkCard
						staticImage="/images/thumbnails/DESERTO MARE_THUMBNAIL.png"
						hoverVideo="/videos/Short/ONN_SVL_DESERTO MARE.mp4"
						overlayText='"Deserto Mare"'
						overlaySubText="Mixed animation shortfilm"
					/>
				</Box>

				{/* half */}
				<Box sx={{ height: {xs: "200px", md: "500px"} }}>
					<WorkCard
						staticImage="/images/thumbnails/GIANT - DSQUARED2 X MARANGONI THUMBNAIL.png"
						hoverVideo="/videos/Short/ONN_SVL_DSQUARED2 GIANT.mp4"
						overlayText='"Giant" - Dsquared2 X Marangoni'
						overlaySubText="Speculative AD"
					/>
				</Box>
				<Box sx={{ height: {xs: "200px", md: "500px"} }}>
					<WorkCard
						staticImage="/images/thumbnails/PIANETA CARTA - COMIECO_THUMBNAIL.png"
						hoverVideo="/videos/Short/ONN_SVL_COMIECO PIANETA CARTA.mp4"
						overlayText='"CF Fit Coach"'
						overlaySubText="Brand Identity"
					/>
				</Box>

				{/* half */}
				<Box sx={{ height: {xs: "200px", md: "500px"} }}>
					<WorkCard
						staticImage="/images/thumbnails/CFFC - BRANDING_THUMBNAIL.jpg"
						hoverVideo="/videos/Short/ONN_CF_VIDEO LOOP.mp4"
						overlayText='"CF Fit Coach"'
						overlaySubText="Brand Identity"
					/>
				</Box>
				<Box sx={{ height: {xs: "200px", md: "500px"} }}>
					<WorkCard
						staticImage="/images/thumbnails/MB FITNESS_THUMBNAIL.jpg"
						hoverVideo="/videos/Short/ONN_MB_VIDEO LOOP.mp4"
						overlayText='"MB Fitness"'
						overlaySubText="Visual & Social Identity"
					/>
				</Box>

				{/* full */}
				<Box sx={{ 
					gridColumn: { xs: "1", md: "1 / -1" },
					height: {xs: "200px", md: "500px"}
				}}>
					<WorkCard
						staticImage="/images/thumbnails/TELL ME THE STORY - MARTINA_THUMBNAIL.png"
						hoverVideo="/videos/Short/ONN_SVL_TELL ME THE STORY.mp4"
						overlayText='"Tell me the story"'
						overlaySubText="Exhibition teaser"
					/>
				</Box>

				{/* half */}
				<Box sx={{ height: {xs: "200px", md: "500px"} }}>
					<WorkCard
						staticImage="/images/thumbnails/INSIDE - PATRIZIA NOVELLO_THUMBNAIL.png"
						hoverVideo="/videos/Short/ONN_SVL_INSIDE PATRIZIA NOVELLO.mp4"
						overlayText='"Inside Patrizia Novello" - Martina'
						overlaySubText="Keynote visual format"
					/>
				</Box>
				<Box sx={{ height: {xs: "200px", md: "500px"} }}>
					<WorkCard
						staticImage="/images/thumbnails/INSIDE - DANIELA NOVELLO_THUMBNAIL.png"
						hoverVideo="/videos/Short/ONN_SVL_INSIDE DANIELA NOVELLO.mp4"
						overlayText='"Inside Daniela Novello" - Martina'
						overlaySubText="Keynote visual format"
					/>
				</Box>

				{/* half */}
				<Box sx={{ height: {xs: "200px", md: "500px"} }}>
					<WorkCard
						staticImage="/images/thumbnails/ITALIANITA_ - Nove25_THUMBNAIL.png"
						hoverVideo="/videos/Short/ONN_SVL_N25 ITALIANITA.mp4"
						overlayText='"Passione, artigianalità" - Nove25'
						overlaySubText="Commercial"
					/>
				</Box>
				<Box sx={{ height: {xs: "200px", md: "500px"} }}>
					<WorkCard
						staticImage="/images/thumbnails/A NEW BEGINNING - FIN_THUMBNAIL.png"
						hoverVideo="/videos/Short/ONN_SVL_FIN A NEW BEGINNING.mp4"
						overlayText='"A new beginning" - Fin'
						overlaySubText="Recruitment campaign spot"
					/>
				</Box>

				{/* full */}
				<Box sx={{ 
					gridColumn: { xs: "1", md: "1 / -1" },
					height: {xs: "200px", md: "500px"}
				}}>
					<WorkCard
						staticImage="/images/thumbnails/REEL19_THUMBNAIL.png"
						hoverVideo="/videos/Short/ONN_SVL_REEL19.mp4"
						overlayText='"Reel19"'
						overlaySubText=""
					/>
				</Box>
			</Box>
    );
}