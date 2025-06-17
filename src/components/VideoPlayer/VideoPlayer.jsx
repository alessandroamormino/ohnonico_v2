import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

export const VideoPlayer = ({ showControls = false, videoSrc, poster }) => {
  const videoRef = useRef(null);
  const [isBuffering, setIsBuffering] = useState(false);
  const [currentQuality, setCurrentQuality] = useState(1);
  const bufferingTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection;
        const effectiveType = connection.effectiveType;

        // set low quality based on network
        switch (effectiveType) {
          case 'slow-2g':
          case '2g':
            setCurrentQuality(0.5);
            break;
          case '3g':
            setCurrentQuality(0.7);
            break;
          case '4g':
          default:
            setCurrentQuality(1);
            break;
        }
      }
    };

    // check buffering and reduce quality
    const handleWaiting = () => {
      setIsBuffering(true);

      // if is buffering for more than 3s, reduce quality
      bufferingTimeoutRef.current = setTimeout(() => {
        if (currentQuality > 0.5) {
          const newQuality = Math.max(0.5, currentQuality - 0.2);
          setCurrentQuality(newQuality);
        }
      }, 3000);
    };

    const handleCanPlay = () => {
      setIsBuffering(false);
      if (bufferingTimeoutRef.current) {
        clearTimeout(bufferingTimeoutRef.current);
      }
    };

    // listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('canplay', handleCanPlay);

    // check download speed
    const monitorDownloadSpeed = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const currentTime = video.currentTime;
        const bufferedAhead = bufferedEnd - currentTime;
 
        // reduce quality if buffering is low
        if (bufferedAhead < 5 && currentQuality > 0.5) {
          setCurrentQuality(prev => Math.max(0.5, prev - 0.1));
        }
        // if is buffering ahead, increase quality
        else if (bufferedAhead > 15 && currentQuality < 1) {
          setCurrentQuality(prev => Math.min(1, prev + 0.1));
        }
      }
    };

    const speedMonitorInterval = setInterval(monitorDownloadSpeed, 2000);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('canplay', handleCanPlay);
      clearInterval(speedMonitorInterval);
      if (bufferingTimeoutRef.current) {
        clearTimeout(bufferingTimeoutRef.current);
      }
    };
  }, [currentQuality]);

  // change video quality dynamically
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // css filter for quality reduction (faked)
      video.style.filter = currentQuality < 1 
        ? `blur(${(1 - currentQuality) * 0.3}px) contrast(${0.8 + currentQuality * 0.2})`
        : 'none';

      video.style.imageRendering = currentQuality < 0.8 ? 'pixelated' : 'auto';
    }
  }, [currentQuality]);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: "auto", md: "calc(100vh - 100px)" },
        backgroundColor: "#000",
        position: 'relative'
      }}
    >
      <video
        ref={videoRef}
        loading="lazy"
        preload="metadata"
        style={{ 
          width: '100%', 
          height: "100%",
          transition: 'filter 0.3s ease'
        }}
        controls={showControls}
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Buffering and quality */}
      {(isBuffering || currentQuality < 1) && (
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            bgcolor: 'rgba(0,0,0,0.8)',
            color: 'white',
            p: 1,
            borderRadius: 1,
            fontSize: '0.7rem',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          {isBuffering && (
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                border: '2px solid white',
                borderTop: '2px solid transparent',
                animation: 'spin 1s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' }
                }
              }}
            />
          )}
          {Math.round(currentQuality * 100)}%
        </Box>
      )}
    </Box>
  );
};