import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Input,
  Button,
} from "@nextui-org/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";
import { useSelector } from "react-redux";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const langData = useSelector((state) => state.language.langData);
  const { pathname } = useLocation();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link to={"/all-recipes/page/1"}>
            <p className=" font-logo text-2xl text-first">Burmese Recipes</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            to={"/meat-eater/page/1"}
            className={pathname.includes("/meat-eater/") && "text-first"}
          >
            <p className=" font-medium hover:text-first">{langData.Meat}</p>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/vegan/page/1"}
            className={pathname.includes("/vegan/") && "text-first"}
          >
            <p className=" font-medium hover:text-first">{langData.Vegan}</p>
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search..."
            size="sm"
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
            type="search"
          />
        </NavbarItem>
        <NavbarItem>
          <LanguageDropdown />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem>
          <NavLink
            to={"/meat-eater/page/1"}
            className={pathname.includes("/meat-eater/") && "text-first"}
          >
            <p className=" font-medium hover:text-first">{langData.Meat}</p>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/vegan/page/1"}
            className={pathname.includes("/vegan/") && "text-first"}
          >
            <p className=" font-medium hover:text-first">{langData.Vegan}</p>
          </NavLink>
        </NavbarItem>
        <NavbarItem className=" border-t-2 pt-3  sm:hidden">
          <LanguageDropdown />
        </NavbarItem>
        <NavbarItem className=" sm:hidden">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search..."
            size="sm"
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
            type="search"
          />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
