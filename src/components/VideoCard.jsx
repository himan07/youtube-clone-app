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
      width: {
        xs: "100%",
        sm: "358px",
        md: "320px",
        lg: "400px",
      },
      boxShadow: "none",
      borderRadius: "12px",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          width: "100%",
          height: { xs: 180, md: 200, lg: 220 },
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: "#1E1E1E",
        height: { xs: "106px", md: "120px", lg: "140px" },
        padding: 2,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="#FFF"
          sx={{
            fontSize: { xs: "0.875rem", md: "1rem", lg: "1.125rem" },
          }}
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography
          variant="subtitle2"
          color="gray"
          sx={{
            fontSize: { xs: "0.75rem", md: "0.875rem", lg: "1rem" },
          }}
        >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
