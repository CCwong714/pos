import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MenuSidebar = () => {
    const navigate = useNavigate()
    return ( 
        <Flex>
        <Button
            colorScheme='none' 
            justifyContent='left'
            padding='0'
            paddingRight='100%'
            borderRadius='0'
            width={'100%'}
            onClick={()=>{
                navigate('/Menu')
            }}
            // _focus={{bg:'brand.fgrey'}}
        >
            <Text 
                fontSize='16px'
                color='#000000'
                textAlign='left'
                fontWeight='medium'
            >
                Menu             
            </Text>
        </Button>
    </Flex>
     );
}
 
export default MenuSidebar;