import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, PhoneIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Box, Button, Flex, HStack, Icon, Image, Select, Text, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Searchbar from '../../common/searchbar/Searchbar';
import { Approved } from './Approved';
import { Paid } from './Paid';
import { Pending } from './Pending';
import { Rejected } from './Rejected';

import pendingIcon from '../../../assets/images/pending.svg';
import paidIcon from '../../../assets/images/paid.svg';
import approvedIcon from '../../../assets/images/approved.svg';
import rejectedIcon from '../../../assets/images/denied.svg';
import payoutIcon from '../../../assets/images/payoutIcon.svg';

function Payout() {
  const [selectedPage, setSelectedPage]= useState('Pending');

  const [numberofrows, setNumberOfRows] =useState(10);
  const [isvaluechange,setIsValueChange]= useState(30)
  const OPtions = [
    "...",
    'Paid',
    'Pending',
    'Approved',
    'Rejected',
  ];

const Numbers=[10,20,30,40,50,60];

//  type event ={
//   event:React.ChangeEvent<HTMLBodyElement>():void
//  }
//  const handleDropdownChanges=()=>{
    
//                 }
  

  return (
  // THIS IS THE MAIN DIV THAT CONTAINS ALL THE OTHER DIV OF THE APPLICATION

    <Box
      margin="20px 0"
      w="100vw"
      h="70">

      {/*

      THIS CODE IS TO DISPLAY THE ELEMENTS IN A HORIZONTAL FORMAT
      THIS ELEMENTS ARE CLICKABLE

      */}
      <Flex
      h='20vh'
        justifyContent="space-evenly">
        <Box
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius="15"
          onClick={()=>setSelectedPage("Pending")}
           bg={selectedPage==="Pending"?'blue':"navy"}>
           
          <VStack >
          <Image src={pendingIcon} alt='image' boxSize='30px' mt='5px' objectFit='cover'/>
            <Text>Pending</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Box>

        <Box
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius="15"
          onClick={()=>setSelectedPage("Approved")} 
          bg={selectedPage==="Approved"?'blue':"navy"}
        >
          
          <VStack>
          <Image src={approvedIcon} alt='image' boxSize='30px' mt='5px' objectFit='cover'/>
            <Text>Approved</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Box>

        <Box
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius="15"
          onClick={()=>setSelectedPage("Paid")}
           bg={selectedPage==="Paid"?'blue':"navy"}

        >
          
          <VStack >
          <Image src={paidIcon} alt='image' boxSize='30px' mt='5px' objectFit='cover'/>
            <Text>Paid</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Box>

        <Box 
          
          w="10vw"
          h="20vh"

          borderRadius="15"
          onClick={()=>setSelectedPage("Rejected")} 
          bg ={selectedPage==="Rejected"?'blue':'navy'}
        >
          <VStack >
          <Image src={rejectedIcon} alt='image' boxSize='30px' mt='5px' objectFit='cover'/>
            <Text>Rejected</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Box>

        <Box
          marginTop="1rem"
        >
          <Button> <Image boxSize='20px' src={payoutIcon}mr='10px' />Payment Request</Button>
        </Box>
      
      </Flex>
      

      <Box
        h="94vh"

        bg="navy"

        m="2rem 2rem"
        borderRadius="15px"
        padding="2rem" >
        <Text mb="1rem">Payout Summary</Text>
        <Flex>

          <HStack flex="1">

            <Select
              w="8rem"
              // placeholder={selectedPage}
              onChange={()=>setSelectedPage(selectedPage)}
              value={selectedPage}
            >
              
               
               {OPtions.map(optionItem=>(
                <option value={optionItem} onClick={()=>setSelectedPage(optionItem) } 
                onChange={()=>setSelectedPage(optionItem)}  >{optionItem}</option>
              
              
              ))}
             
            </Select>
            <Searchbar />
            <Button>Reset</Button>
           

          </HStack>

          <HStack flex="1" justify="end">
            <Button>Excell</Button>
            <Button>CSV</Button>
            <Button>Print</Button>
          </HStack>
        </Flex>
          {/* THIS IS A COMPONENT  */}
        <Box
         height="65vh"
           
         mt="4px"
         mb='15px'
         overflowY='scroll'
        >
          
         
        { selectedPage==="Paid"&& <Paid/>}
          {selectedPage==="Pending"&&<Pending number={numberofrows}/>}
          {selectedPage==="Approved"&&<Approved/>}
          {selectedPage==="Rejected"&&<Rejected/>}

          {<div>this number per page is {numberofrows}</div>}

        </Box>
          <Flex  justifyContent='end' >
           <HStack >
           <Select
            
            w="14.5rem"
            h="2rem"
            placeholder='Numbers per page 10'
            
            // value={}
            // onClick={()=>setIsValueChange(item)} 
          >
           {Numbers.map(item=>{
            
            return (
              <option value={item}  onClick={()=>setIsValueChange(item)} onChange={()=>setNumberOfRows(isvaluechange)} >{item}</option>
             )
           })}
            
          </Select>
            {/* <Button h="2rem">Previous{10}</Button> */}
            <ChevronLeftIcon h='2rem' w='3rem'/>
            <Text>{numberofrows}</Text>
           <ChevronRightIcon  h='2rem' w='3rem'/>
           </HStack>     
        
           </Flex>
      </Box>

    </Box>
  );
}

export default Payout;
