import React from "react";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 2, 
      }}
    >
      {videos.map((item) => (
        <Box key={item.id.videoId || item.id.channelId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
