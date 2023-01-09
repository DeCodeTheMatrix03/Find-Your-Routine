import React, {useState} from 'react'
import { Box } from '@mui/material' 

import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'
import Exercises from '../components/Exercises'

export default function Home(){

   //setting state for Data from API
  const [exercises, setExercises] = useState([])
  
  //setting state for body part 
  const[bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
        <HeroBanner />
        <Search 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
        <Exercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
        />
 </Box>
  )
}

