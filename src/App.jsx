import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import RoutePath from "./routing/RoutePath";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <div className=" sm:container mx-auto">
        <RoutePath />
      </div>
    </>
  );
};

export default App;
