import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/Constants";
import { fontSize, height } from "@mui/system";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const [contentDetail, setContentDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails&id=${videoId}`).then((data) =>
      setContentDetail(data.items[0]) 
    );
  }, [contentDetail]); 

  

  return (
    <Card
      sx={{
        width: { sm: "310px", xs: "99%" },
        borderRadius: 0,
        boxShadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          component="img"
          sx={{ width: 355, height: 180 }} 
          
        />
        {/* <Typography variant="h4" > 
          {contentDetail?.contentDetails?.duration}
        </Typography> */}
      </Link>

      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "127px",
          borderRadius: "none",
          boxShadow: "none",
        }}
      >
        <Link>
          <Typography variant="subtitle1" fontWeight="bold" color="#ffff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link>
          <Typography variant="subtitle2" color="gray" mt="4px">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "14px", marginLeft: "4px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
