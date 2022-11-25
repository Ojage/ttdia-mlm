import { Box,HStack,Image } from '@chakra-ui/react'
import React from 'react'
import dropdownIcon from '../../../assets/images/ecom_dropdown_icons.svg'
import dashboard from '../../../assets/images/dashboard.svg';
export const EcommerceSubNavBar = () => {
  return (
    <Box
    ml='4rem'
    >
         <HStack color='white'>
         <p>Category</p><Image src={dropdownIcon}></Image>
       </HStack>
 
       <HStack color='white'>
         <p>Price</p><Image src={dropdownIcon}></Image>
       </HStack>
 
       <HStack color='white'>
         <p>Location</p><Image src={dropdownIcon}></Image>
       </HStack>
 
       <HStack color='white'>
         <p>Quality</p><Image src={dropdownIcon}></Image>
       </HStack>
 
       <HStack color='white'>
         <p>Rating</p><Image src={dropdownIcon}></Image>
       </HStack>
    </Box>
  )
}
