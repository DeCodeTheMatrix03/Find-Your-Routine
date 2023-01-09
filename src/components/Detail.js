import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail
    const extraDetail = [
        {   icon:BodyPartImage,
            name: bodyPart,
            header: 'Muscles Worked',
        },
        {
            icon:EquipmentImage,
            name: equipment,
            header: 'Equipment Needed' ,
        },
    ]
  return (
    <Stack
    gap='60px'
    sx={{flexDirection: {lg: 'row'}, p :'20px', alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
        <Stack 
        sx={{gap: { lg: '35px', xs: '20px'}}}>
            <Typography variant='h3' fontWeight='bold' textTransform='capitalize'
            paddingBottom='30px'>
                {name}
            </Typography>
            <Typography 
            paddingBottom='10px'
            variant='h6' >
               Exercises have many benefits for the body. {name} is one of the best exercises for your {target}. Get started today by doing 3 sets of 8 to 10 reps to work on your {bodyPart}!
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction='row' gap='24px' alignItems='center' paddingBottom='30px'>
                    <Typography variant='h5' textTransform='capitalize'>{item.header} : {item.name}</Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail