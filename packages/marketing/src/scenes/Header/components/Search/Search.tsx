import { ErrorBoundary } from "react-error-boundary";
import { lazy, Suspense, type FC } from "react";

const Search = lazy(()=>import("catalog/search"))
const SearchContainer: FC = () => {
  return <div>
    <ErrorBoundary fallback={<div style={{color: "white"}}>An error has occurred</div>}>
      <Suspense>
        <Search />
      </Suspense>
    </ErrorBoundary>
  </div>
};

export default SearchContainer;
