import React from 'react'
import {Stack, Typography} from '@mui/material'

import Icon from '../assets/images/Logo.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
 <Stack
 type='button'
 alignItems = 'center'
 justifyContent='center'
 className='bodyPart-card'
 sx={{
     borderTop: bodyPart === item ?  '4px solid #5C9C31' : '' ,
     backgroundColor:'white',
     borderBottomLeftRadius: '20px',
     width: '270px',
     height: '270px',
     cursor:'point',
     gap: '45px'
    }}
    onClick={() => {
    setBodyPart(item)
    window.scrollTo({top: 1800, left:100, behavior:'smooth'})

}}
 >
     <img 
     src={Icon} 
     alt='dumbell' 
     style={{
     width:'100px', 
     height:'100px'
     }} />
     <Typography 
     fontSize='24px'
     fontWeight='bold'
     color='#3A1212'
     textTransform='capitalize'>
         {item}
     </Typography>
 </Stack>
  )
}

export default BodyPart