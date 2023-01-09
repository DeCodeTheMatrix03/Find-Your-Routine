import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

export default function HeroBanner (){
  return (
      <Box sx ={{
        mt: { lg : '212px' , xs:'70px'},
        ml: {sm:'50px'}
      }} position="relative" p ="20px" >
          <Typography 
          color ="#5C9C31"
          fontWeight="600"
          fontSize="26px"> 
              Weight Training & Calisthenics
          </Typography>
          <Typography fontWeight="700"
          sx={{ fontSize: {lg: '44px', xs:'40px'}}}>
              Push, Pull, Legs <br /> and Repeat
          </Typography>
          <Typography fontSize='22px'
          lineHeight="35px" marginBottom ='15px'>
              Check out exercises for all levels!
          </Typography>
          <Button 
          href="#exercises"
          variant="contained" 
          style={{ 
              backgroundColor: '#5C9C31',
              borderRadius: '8px',
              padding: '10px'
          }}>Explore Exercises
          </Button>
          <img src ={HeroBannerImage} alt ='Front Cover Image' className="hero-banner-img"/>
      </Box>
  
  )
}

