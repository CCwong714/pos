import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface DetailsProps {
  title: string;
  image: string;
  price: string;
}

const MenuDisComp: FC<DetailsProps> = ({ title, image, price }) => {
  return (
    <>
      <Card maxW="200px">
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            // boxSize={'150px'}
          />
          <Stack mt="6" spacing="3">
            <Text color="#000000" fontSize="18px" fontWeight="bold">
              {title}
            </Text>
            {/* <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text> */}
            <Text color="blue.600" fontSize="18px">
              {price}
            </Text>
          </Stack>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter height={'50px'}>
          <ButtonGroup spacing="2" marginTop={'-3vh'}>
            <Button variant="solid" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default MenuDisComp;
