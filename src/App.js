import SearchState from "./context/search/searchState";
import Router from "./router";

const App = () => {
  return (
    <>
      <SearchState>
        <Router />
      </SearchState>
    </>
  );
};

export default App;
