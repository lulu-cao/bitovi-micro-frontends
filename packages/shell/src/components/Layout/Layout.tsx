import type { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { Container, Flex, Box } from "@mantine/core";

const Header = lazy(() => import("marketing/header"));
const Footer = lazy(() => import("marketing/footer"));

const Layout: FC = () => {
  return (
    <Flex sx={{ flex: 1 }} direction="column" justify="space-between">
      <ErrorBoundary fallback={<div>Header went wrong</div>}>
        <Suspense>
          <Header />
        </Suspense>
      </ErrorBoundary>
      <Flex w="100%" sx={{ flex: 1 }} py="xl" component="main">
        <Container fluid w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}>
          <Outlet />
        </Container>
      </Flex>
      <ErrorBoundary fallback={<div>Footer went wrong</div>}>
        <Suspense fallback="loading">
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </Flex>
  );
};

export default Layout;
