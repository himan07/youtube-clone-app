import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constant";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: '100%',
      maxWidth: '400px',
      boxShadow: "none",
      borderRadius: "12px",
      overflow: "hidden",
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: "#1E1E1E",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        component="img"
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          height: { xs: 180, sm: 200, md: 220 }, 
          objectFit: 'cover', 
        }}
      />
    </Link>
    <CardContent
      sx={{
        padding: 2,
        flexGrow: 1, 
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="#FFF"
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" }, 
            overflow: 'hidden',
            textOverflow: 'ellipsis', 
            whiteSpace: 'nowrap', 
          }}
        >
          {snippet?.title || demoVideoTitle}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography
          variant="subtitle2"
          color="gray"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            display: "flex",
            alignItems: "center",
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "16px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
