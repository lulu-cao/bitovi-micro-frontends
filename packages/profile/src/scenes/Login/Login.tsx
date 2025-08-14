import type { Profile } from "shared-types";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { createStyles } from "@mantine/emotion";
import {
  Button,
  Container,
  Flex,
  Title,
  Text,
  PasswordInput,
  Stack,
  TextInput,
  Paper,
} from "@mantine/core";

import backgroundImage from "../../../assets/pexels-gustavo-fring-6050428.jpg";

const Login: Profile.Login = () => {
  const { classes } = useStyles();
  const [, setIsLoggedIn] = useLocalStorage({
    key: "logged-in",
    defaultValue: false,
  });

  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate("/shop")
  };

  return (
    <Container className={classes.loginPage}>
      <div className={classes.background} />
      <div className={classes.backgroundScreen} />

      <Flex
        direction="column"
        wrap="nowrap"
        align="center"
        justify="center"
        className={classes.loginCentered}
      >
        <Paper
          p="xl"
          shadow="md"
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginSuccess();
          }}
        >
          <Stack>
            <Title order={2}>Our treasures, your style</Title>
            <Text>Shop our exclusive collections now</Text>
            <TextInput placeholder="User name" />
            <PasswordInput placeholder="Password" />
            <Button type="submit">Login</Button>
          </Stack>
        </Paper>
      </Flex>
    </Container>
  );
};

export default Login;

const useStyles = createStyles((theme) => ({
  background: {
    color: "#ffffff33",
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    backgroundSize: "100% auto",
    backgroundClip: "border-box",
    zIndex: -2,
    backgroundImage: `url(${backgroundImage})`,
  },
  backgroundScreen: {
    backgroundColor: "#ffffffdd",
    zIndex: -1,
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    content: "'\\00A0'", // Adding escaped Unicode space character
  },
  loginCentered: {
    zIndex: 10,
    height: "100vh",
  },
}));
