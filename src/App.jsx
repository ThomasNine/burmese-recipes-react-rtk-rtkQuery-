import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import RoutePath from "./routing/RoutePath";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      <NavbarComponent />
      <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={pathname}>
          <div className=" sm:container mx-auto">
            <RoutePath />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default App;
