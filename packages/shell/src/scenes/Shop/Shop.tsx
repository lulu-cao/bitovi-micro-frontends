import type { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { lazy, Suspense } from "react";
import { Grid } from "@mantine/core";

const Filter = lazy(() => import("catalog/filter"));
const CatalogList = lazy(() => import("catalog/list"));

const Shop: FC = () => {
  return (
    <Grid>
      <Grid.Col span={{ sm: 12, md: 3 }}>
        <ErrorBoundary fallback={<div>Filter went wrong</div>}>
          <Suspense>
            <Filter />
          </Suspense>
        </ErrorBoundary>
      </Grid.Col>
      <Grid.Col span={{ sm: 12, md: 9 }}>
        <ErrorBoundary fallback={<div>CatalogList went wrong</div>}>
          <Suspense>
            <CatalogList />
          </Suspense>
        </ErrorBoundary>
      </Grid.Col>
    </Grid>
  );
};

export default Shop;
