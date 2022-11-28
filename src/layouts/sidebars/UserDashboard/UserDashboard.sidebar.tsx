import { Link as RouteLink } from 'react-router-dom';
import { SetStateAction, useEffect, useState } from 'react';
import {
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Center,
  Flex,
  VStack,
  useBoolean,
} from '@chakra-ui/react';
import { nestRoutes } from '../../../routes/routes';
import { IN_DASHBOARD_ROUTE, ROUTE, USER_DASHBOARD_ROUTE } from '../../../routes';
import { Badger } from './Badger';
<<<<<<< HEAD
import { isLight, mode } from '@chakra-ui/theme-tools';
import dashboard from '../../../assets/images/dashboard.svg';
import ECommerceSideNavBar from '../../../components/UserDashboard/ECommerce/ECommerce';
import dropdownIcon from '../../../assets/images/ecom_dropdown_icons.svg'
import ECommerce from '../../../components/UserDashboard/ECommerce/ECommerce';
import { EcommerceSubNavBar } from './EcommerceSubNavBar';
//  

=======
>>>>>>> feat/as_a_user_i_should_see_the_dashboard

type PanelTextProps = { text: string };
const PanelText = ({ text }: PanelTextProps) => (
  <Text fontWeight={400} fontSize="15px">
    {text}
  </Text>
);

const ItemBadge = Badger();

type SidebarItemContentProps = {
	text: string;
	icon: string;
	badgeVisibility: string;
	badgeContent: number;
};
const SidebarItemContent = ({
  text,
  icon,
  badgeContent,
  badgeVisibility,
}: SidebarItemContentProps) => {
<<<<<<< HEAD
	// const iconAlt = `${text}_icon`;
  // const [isdisplay, setIsDisplayed] =useState(false)
 return (
	 	<>
  {/* //     <VStack>
  //           <HStack
  //           minWidth="13vw"
  //           minHeight="45px"
  //           pl="2rem"
  //           justifyContent="left">
  //           <Image h="19.87px" w="19.87px" src={icon} alt={iconAlt} />
  //           <Text fontWeight={500} fontSize="16px" onClick={()=>setIsDisplayed(!isdisplay)}>
  //             {text}
              
  //           </Text>
  //           <ItemBadge nomba={badgeContent} disp={badgeVisibility} />
  //         </HStack>
  //        {
  //        (text==="ECommerce"&&isdisplay)
  //        &&
  //         <EcommerceSubNavBar/>
  //        }
        
  //     </VStack> */}
    </>
	);
=======
  const iconAlt = `${text}_icon`;
  return (
    <HStack
      minWidth="13vw"
      minHeight="45px"
      pl="2rem"
      justifyContent="left"
    >
      <Image h="19.87px" w="19.87px" src={icon} alt={iconAlt} />
      <Text fontWeight={500} fontSize="16px">
        {text}
      </Text>
      <ItemBadge nomba={badgeContent} disp={badgeVisibility} />
    </HStack>
  );
>>>>>>> feat/as_a_user_i_should_see_the_dashboard
};

type SidebarItemProps = {
	to: USER_DASHBOARD_ROUTE | ROUTE | IN_DASHBOARD_ROUTE;
	name: string;
	selected: boolean;
	icon: any;
};


<<<<<<< HEAD
const SideBarItem = ({ to, name ,icon}: SidebarItemProps) => {
=======
const SideBarItem = ({ to,
  name,
  selected,
  icon, }: SidebarItemProps) => {
>>>>>>> feat/as_a_user_i_should_see_the_dashboard
  const [active, setActive] = useState('');
  
  

  const [badgeVisibility, setBadgeVisibility] = useState('none');
  const [badgeContent, setBadgeContent] = useState(0);
  
  const nomba = 1;
  

  const activeBgGradient = 'linear(-273.78deg,darken 2.4%, danger 27.63%, primary 102.85%)';
  useEffect(() => {
    if (nomba > 0) {
      setBadgeContent(nomba);
      setBadgeVisibility('block');
    }

  }, []);

  return (
    <Box
      className={active === name ? 'mlm' : ''}
      as={RouteLink}
      to={to}
      onClick={() => setActive(name)}
      _hover={{
        cursor: 'pointer',
      }}
      
      borderRadius="12.42px"
    >
      <SidebarItemContent
        text={name}
        icon={icon}
        badgeContent={badgeContent}
        badgeVisibility={badgeVisibility}
      />
    </Box>
  );
};
const SidebarItems = () => {
  const [active, setActive] = useState("Dashboard");
  const activeBtn = (value: any) => {
    setActive(value);
  };
  return (
    <VStack
      height="100vh"
<<<<<<< HEAD
      w='30vw'
      gap="2.4rem"
=======
      padding="0px 20px 0px 0px" gap="20px" alignItems="flex-start"
>>>>>>> feat/as_a_user_i_should_see_the_dashboard
    >
      {
      nestRoutes.map((item) => (
       <Box 
       borderRadius="12.54px"
       onClick={()=>setActive(item.name)}
       bgGradient= {active==item.name? 'linear(-273.78deg,darken 2.4%, danger 27.63%, primary 102.85%)': ''}
       >
           <SideBarItem
<<<<<<< HEAD
           
            to={item.path}
            name={item.name}
             selected={false} 
             icon={dashboard}        />
=======
          icon={item.icon}
          selected={item.selected}
          to={item.path}
          name={item.name}
        />
>>>>>>> feat/as_a_user_i_should_see_the_dashboard

       </Box>
      ))}
    </VStack>
  );
};

/**
 *
 * @returns The Dashboard Sidebar
 */
const DashboardSidebar = () => (
  <Box
    position="fixed"
    top="6rem"
    className="DashboardSidebar"
    w="25vh"
    h="100vh"
    overflow="hidden"
  >
    <VStack gap="3rem">
      <PanelText text="Member CP" />

      <SidebarItems />
    </VStack>
  </Box>
);

export default DashboardSidebar;
