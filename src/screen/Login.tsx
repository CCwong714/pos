import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginData from "../json/LoginData.json";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setEmpty] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [click, setClick] = useState(false);
  const [isError, setError] = useState(false);
  // const [isSuccess, setSuccess] = useState(false);
  const handleUsernameChange = (e: any) => setUsername(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const navigate = useNavigate();

  // console.log("123", LoginData);

  useEffect(() => {
    if (username === "" || password === "") {
      setEmpty(true);
    }
  }, [username, password, click]);

  function handleLogin() {
    if (click) {
      for (let index = 0; index < LoginData.length; index++) {
        if (
          username === LoginData[index].username &&
          password === LoginData[index].password
        ) {
          console.log("SUCCESS");
          // setSuccess(true);
          setError(false);
          navigate("/MainMenu");
          setClick(false);
          setIsStart(true);
          break;
        } else {
          console.log("FAILED");
          setError(true);
          setUsername("");
          setPassword("");
          setIsStart(true);
          setClick(false);
        }
      }
    }
  }

  useEffect(() => {
    if (click) {
      for (let index = 0; index < LoginData.length; index++) {
        if (
          username === LoginData[index].username &&
          password === LoginData[index].password
        ) {
          console.log("SUCCESS");
          setError(false);
          navigate("/MainMenu");
          setClick(false);
          setIsStart(true);
          break;
        } else if (
          username !== LoginData[index].username &&
          password !== LoginData[index].password &&
          username !== "" &&
          password !== ""
        ) {
          console.log("FAILED");
          setError(true);
          setUsername("");
          setPassword("");
          setClick(false);
          setEmpty(false);
        } else {
          setIsStart(true);
          setClick(false);
        }
      }
    }
  }, [click]);

  return (
    <Flex
      width={"100vw"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"250px"}
    >
      <Flex
        height={"250px"}
        width={"300px"}
        // bgColor={"#DE9C9C"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FormControl isRequired isInvalid={isStart || isError}>
          <FormLabel>Username</FormLabel>
          <Input value={username} onChange={handleUsernameChange} />
        </FormControl>
        <Spacer />
        <FormControl isRequired isInvalid={isStart || isError}>
          <FormLabel>Password</FormLabel>
          <Input value={password} onChange={handlePasswordChange} />
        </FormControl>
        <Spacer />
        {isError ? (
          <Text color={"red"} fontSize={"14px"}>
            Wrong username or password.
          </Text>
        ) : (
          isStart &&
          isEmpty && (
            <Text color={"red"} fontSize={"14px"}>
              Username and password is required.
            </Text>
          )
        )}
        <Spacer />
        <Button
          colorScheme={"gray"}
          onClick={() => {
            setClick(true);
            // setTimeout(() => {
            //   handleLogin();
            // }, 100);
          }}
        >
          <Text color={"#000000"}>Login</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
