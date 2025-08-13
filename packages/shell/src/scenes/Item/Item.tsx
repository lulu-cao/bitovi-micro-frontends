import type { FC } from "react";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Item = lazy(() => import("catalog/item"));

const ItemScene: FC = () => {
  return (
    <ErrorBoundary fallback={<div>CatalogItem went wrong</div>}>
      <Suspense>
        <Item />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ItemScene;

