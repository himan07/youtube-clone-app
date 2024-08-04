import { useState, useEffect } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {videos?.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id.videoId}>
            <Videos videos={[video]} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchFeed;
