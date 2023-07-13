import { useState } from 'react' 
import {Route , Routes} from 'react-router-dom'
import Feed from './Components/Feed' 
import VideoDetail from './Components/VideoDetail'  
import ChannelDetail from './Components/ChannelDetail' 
import Search from './Components/Search' 
import Header from './Components/Header' 
import { Box } from '@mui/material'

const App = () => { 

  return ( 
    <Box sx={{backgroundColor:'#000'}} >  
    <Header/> 
     <Routes>
        <Route path='/' element={<Feed/>} /> 
        <Route path='/video/:id' element={<VideoDetail/>} /> 
        <Route path='/channel/:id' element={<ChannelDetail/>} /> 
        <Route path='/search/:searchTerm' element={<Search/>} /> 
      </Routes>
    </Box>
  )
}

export default App
