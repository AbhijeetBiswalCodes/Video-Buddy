import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI"; 
import { useParams } from "react-router-dom";  

const Search = () => { 
  const [videos, setVideos] = useState([]); 
  const { searchTerm } = useParams(); 

  useEffect(() => { 
    setVideos(null)

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (

      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          mb={2}
          sx={{ color: "white", fontWeight: "bold" }}
        > 
          <span style={{ color: "#FC1503", marginLeft: "10px" }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos} />
      </Box> 
  );
};

export default Search;
