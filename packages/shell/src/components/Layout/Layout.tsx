import { lazy, FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Flex, Box } from "@mantine/core";

const Header = lazy(()=>import("marketing/header"))
const Footer = lazy(()=>import("marketing/footer"))

const Layout: FC = () => {
  return (
    <Flex sx={{ flex: 1 }} direction="column" justify="space-between">
      <Box component="header" c="white" py="lg" bg="dark">
        <Suspense>
          <Header />
        </Suspense>
      </Box>
      <Flex w="100%" sx={{ flex: 1 }} py="xl" component="main">
        <Container fluid w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}>
          <Outlet />
        </Container>
      </Flex>
      <Box component="footer" c="white" py="lg" bg="dark">
        <Suspense>
          <Footer />
        </Suspense>
      </Box>
    </Flex>
  );
};

export default Layout;
