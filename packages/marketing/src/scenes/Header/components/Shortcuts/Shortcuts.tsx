import { lazy, Suspense, type FC } from "react";

import { Button, Flex, Group, Tooltip } from "@mantine/core";
import { IconAlertTriangle, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const Cart = lazy(()=>import("order/cart"))

const Shortcuts: FC = () => {
  return (
    <Group>
      <Button
        component={Link}
        to="/account"
        c="white"
        bg="dark"
        sx={{ padding: 0, aspectRatio: 1, borderRadius: "50%" }}
      >
        <IconUser />
      </Button>
      <ErrorBoundary fallback={<div style={{color: "white"}}>Cart Went Wrong</div>}>
        <Suspense>
          <Cart />
        </Suspense>
      </ErrorBoundary>
    </Group>
  );
};

export default Shortcuts;
