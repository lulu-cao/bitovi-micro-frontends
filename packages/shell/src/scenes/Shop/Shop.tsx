import { lazy, FC, Suspense } from "react";
import { Grid } from "@mantine/core";

const CatalogList = lazy(()=>import("catalog/CatalogList"))
const Filter = lazy(()=>import("catalog/Filter"))

const Shop: FC = () => {
  return (
    <Grid>
      <Grid.Col span={{ sm: 12, md: 3 }}>
        <Suspense>
          <Filter />
        </Suspense>
      </Grid.Col>
      <Grid.Col span={{ sm: 12, md: 9 }}>
        <Suspense>
          <CatalogList />
        </Suspense>
      </Grid.Col>
    </Grid>
  );
};

export default Shop;
