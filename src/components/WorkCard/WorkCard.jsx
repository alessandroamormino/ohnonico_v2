import { Box, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";

export const WorkCard = ({ 
    staticImage,
    hoverVideo,
    overlayText,
    overlaySubText
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef();

    useEffect(() => {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setIsInView(true);
						observer.disconnect();
					}
				},
				{ threshold: 0.1 }
			);

			if (cardRef.current) {
				observer.observe(cardRef.current);
			}

			return () => observer.disconnect();
    }, []);

    return (
        <Box
					ref={cardRef}
					sx={{
						position: "relative",
						overflow: "hidden",
						cursor: "pointer",
						height: "100%",
						backgroundColor: "#f0f0f0",
					}}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
        >
            {/* lazy loaded image */}
            {isInView && (
							<Box
								component="img"
								src={staticImage}
								alt="Project preview"
								loading="lazy"
								onLoad={() => setIsImageLoaded(true)}
								sx={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										transition: "opacity 0.3s ease",
										opacity: isHovered ? 0 : (isImageLoaded ? 1 : 0),
								}}
							/>
            )}

            {/* lazy loaded video */}
            {isInView && isHovered && (
							<Box
								component="video"
								src={hoverVideo}
								autoPlay
								muted
								loop
								preload="none"
								onLoadedData={() => setIsVideoLoaded(true)}
								sx={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
										objectFit: "cover",
										opacity: isVideoLoaded ? 1 : 0,
										transition: "opacity 0.3s ease",
										pointerEvents: "none",
								}}
							/>
            )}

            {/* Loading placeholder */}
            {(!isImageLoaded || !isInView) && (
							<Box
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									backgroundColor: "#e0e0e0",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography variant="body2" color="text.secondary">
									Loading...
								</Typography>
							</Box>
            )}

            {/* overlay */}
            <Box
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								backgroundColor: "rgba(0, 0, 0, 0.5)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								opacity: isHovered ? 1 : 0,
								transition: "opacity 0.3s ease",
							}}
            >
							<Typography
									variant="h5"
								sx={{
									color: "#fff",
									textAlign: "center",
									fontFamily: "ExtraBold",
									fontSize: { xs: "1.5rem", md: "2rem" },
								}}
							>
								{overlayText}
							</Typography>
							<Typography
								variant="subtitle1"
								sx={{
									color: "#fff",
									fontFamily: "Light",
									textAlign: "center",
									fontSize: { xs: ".9rem", md: "1rem" },
									mt: -1.5,
								}}
							>
								{overlaySubText}
							</Typography>
            </Box>
        </Box>
    );
};