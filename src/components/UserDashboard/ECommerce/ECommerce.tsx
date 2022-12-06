import { Box, Button, Checkbox, Flex, Grid, GridItem, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import dropdownIcon from '../../../assets/images/ecom_dropdown_icons.svg'
import EcommerceImage from '../../../assets/images/ecom.svg'
import EcommerceImage1 from '../../../assets/images/ecom1.svg'
import star from '../../../assets/images/Star.svg'
function ECommerce() {
  return (
    <Box
  
    mt='7rem'
    w='80vw'
    h='80vh'
    ml='12rem'
   
    overflowY='scroll'
    
    >
        <Flex  >
          <Flex  flexDirection='column' color='white'  flex='1' >
          <CheckBoxComponents name="Cleaner" />
            <CheckBoxComponents name="Phone" />
            <CheckBoxComponents name="Moisturizer" />
            <CheckBoxComponents name="Faced Mask" />
            <CheckBoxComponents name="Hand Sanitizer" />
          </Flex>
          


          <VStack flex='5'  >
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <GridElements imageUrl={EcommerceImage} headerleftText="Room wall Art" amount='3000XAF' bottomleftText='Arrange your room, make it pleasing to the eye'/>
            <GridElements imageUrl={EcommerceImage1} headerleftText="Room wall Art" amount='3000XAF' bottomleftText='Arrange your room, make it pleasing to the eye'/>
            <GridElements imageUrl={EcommerceImage} headerleftText="Room wall Art" amount='3000XAF' bottomleftText='Arrange your room, make it pleasing to the eye'/>
            <GridElements imageUrl={EcommerceImage1} headerleftText="Room wall Art" amount='3000XAF' bottomleftText='Arrange your room, make it pleasing to the eye'/>
            <GridElements imageUrl={EcommerceImage} headerleftText="Room wall Art" amount='3000XAF' bottomleftText='Arrange your room, make it pleasing to the eye'/>
            <GridElements imageUrl={EcommerceImage1} headerleftText="Room wall Art" amount='3000XAF' bottomleftText='Arrange your room, make it pleasing to the eye'/>
            <GridElements imageUrl={EcommerceImage} headerleftText="Room wall Art" amount='3000XAF' bottomleftText='Arrange your room, make it pleasing to the eye'/>
            
            
          </Grid>
          </VStack>
        </Flex>   
        
        
      
    </Box>
  );
}


export default ECommerce;

import React from 'react'

type checkboxName={
  name:string
  
}
export const CheckBoxComponents = ({name}:checkboxName) => {
  return (
    <div>
      <VStack >
       
        <Flex justifyContent='space-between' >
          <Box flex='1' mr='10px'>
          <Checkbox />
          </Box>
          <Box  flex='10'>
          <Text >{name}</Text>
          </Box>
        </Flex>
      </VStack>
    </div>
  )
}



type gridProps={
  imageUrl:string
  headerleftText:string
  amount:string
  bottomleftText:string
  
}
export const GridElements = ({imageUrl,headerleftText,amount,bottomleftText}:gridProps) => {
  return (
    <Box position='relative'>
       <GridItem bg='white'  borderRadius='18px' h='15rem' >
              <Image src={imageUrl} fit='cover'/>
              <Box bg='AppWorkspace' color='white' h='6rem' borderBottomRadius='18px'>
                <VStack>
                <Flex justifyContent='space-between' >
                  <Text   mt='10px' fontSize='13px' pr='20px' w='9rem' >{headerleftText}</Text>
                  
                  <Text  fontSize='13px' mt='10px'>{amount}</Text>
                </Flex>
                <Flex  >
                  <Text  mt='1px' fontSize='11px' pr='2px' pb='9px' w='9rem'>{bottomleftText}</Text>
                  <Button borderRadius='20px'>Buy</Button>
                </Flex>
                </VStack>
              </Box>
              </GridItem>
      <Box position='absolute' top='5' left='3' bg='Background' p='2' borderRadius='15px'>
        <HStack>
          <Image src={star} w='20px'/>
          <Text>4.9</Text>
        </HStack>
      </Box>
    </Box>
  )
}






