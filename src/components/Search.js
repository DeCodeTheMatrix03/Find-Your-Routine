import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import {exerciseOptions , fetchData} from '../utils/fetchData'
import HoritonzalScrollBar from './HoritonzalScrollBar'


export default function Search({setExercises, bodyPart, setBodyPart}){

//setting state in our input value
  const [search, setSearch] = useState('')
 
  //bodyParts state
  const [bodyParts, setBodyParts] = useState([])

//useEffect will load our muscle groups as soon as the page renders
  useEffect(() => {
    const fetchExerciseData = async() => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

    setBodyParts(['all', ...bodyPartsData])
  }
//call this once the app loads
  fetchExerciseData()
},[])

//using this function for our onClick
  const handleSearch= async () => {

    //using fetchData function from Utils to make request to our API
    if(search){
     const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

    //filtering all the API data to onlu search for exericse, muscle group, equipment
     const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search) 
     || exercise.target.toLowerCase().includes(search) 
     || exercise.equipment.toLowerCase().includes(search) 
     || exercise.bodyPart.toLowerCase().includes(search)  
     )
     setSearch('')
     setExercises(searchedExercises)
    }
  }

  return (

    //Stack is used for a one-dimensional layout 
    <Stack
    alignItems= 'center'
    mt='37px'
    justifyContent='center'
    p='20px'>
        <Typography 
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', xs: '30px' }}}
        mb="50px" textAlign='center'>
          Not Sure Where To Begin? <br/>
          Explore Exercises 
        </Typography>
        <Box
        position="relative"
        mb ="72px">
          <TextField
          sx={{
            input:{ 
              fontWeight: '700', 
              border: 'none', 
              borderRadius:'4px'
            },
            width:{lg : '800px', xs: '350px' },
            backgroundColor:'white',
            borderRadius: '40px'
          }}
          height="76px"
          value ={search}
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
          placeholder='Search Exercises or Equipment, i.e Pull Up or Barbell'
          type= 'text'
           />
          <Button 
          className="search-btn"
        
          sx={{
            bgcolor: '#5C9C31',
            color: 'white',
            textTransform: 'none',
            width: { lg: '175px',  xs: '80px'},
            fontSize: {lg: '20px', xs: '14px'},
            height:'56px',
            position: 'absolute', 
            right: '0'
          }}
          onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        <Box sx={{ position: 'relative', width:'100%', p:'20px'}}> 
          <HoritonzalScrollBar 
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart} />
          </Box>
    </Stack>
  )
}

