import React from "react";
import { useGetRecipesQuery } from "./store/services/endpoints/recepies.endpoints";
import { useGetUserTypesQuery } from "./store/services/endpoints/user_types.endpoints";
import NavbarComponent from "./components/NavbarComponent";
import RoutePath from "./routing/RoutePath";

const App = () => {
  const { data } = useGetRecipesQuery();

  return (
    <>
      <NavbarComponent />
      <div className=" container mx-auto">
        <RoutePath />
      </div>
    </>
  );
};

export default App;
