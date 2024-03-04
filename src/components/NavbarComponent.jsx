import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Button,
} from "@nextui-org/react";
import { useGetUserTypesQuery } from "../store/services/endpoints/user_types.endpoints";
import { Link, NavLink } from "react-router-dom";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data } = useGetUserTypesQuery();

  const [MMLanguage, setMMLanguage] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link to={"/"}>
            <p className=" font-logo text-2xl text-first">Burmese Recipes</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active text-first" : "")}
          >
            <p className=" font-medium hover:text-first">
              {MMLanguage ? "အားလုံး" : "All"}
            </p>
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to={"/meat-eater"}
            className={({ isActive }) => (isActive ? "active text-first" : "")}
          >
            <p className=" font-medium hover:text-first">
              {MMLanguage ? "အသား" : "Meat"}
            </p>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/vegan"}
            className={({ isActive }) => (isActive ? "active text-first" : "")}
          >
            <p className=" font-medium hover:text-first">
              {MMLanguage ? "သက်သတ်လွတ်" : "Vegan"}
            </p>
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
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onClick={() => setMMLanguage(!MMLanguage)}
          >
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
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            {MMLanguage ? "အင်္ဂလိပ်" : "mm"}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active text-first" : "")}
          >
            <p className=" font-medium hover:text-first">
              {MMLanguage ? "အားလုံး" : "All"}
            </p>
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to={"/meat-eater"}
            className={({ isActive }) => (isActive ? "active text-first" : "")}
          >
            <p className=" font-medium hover:text-first">
              {MMLanguage ? "အသား" : "Meat"}
            </p>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/vegan"}
            className={({ isActive }) => (isActive ? "active text-first" : "")}
          >
            <p className=" font-medium hover:text-first">
              {MMLanguage ? "သက်သတ်လွတ်" : "Vegan"}
            </p>
          </NavLink>
        </NavbarItem>
        <NavbarItem className=" border-t-2 pt-3  sm:hidden">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onClick={() => setMMLanguage(!MMLanguage)}
          >
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
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            {MMLanguage ? "အင်္ဂလိပ်" : "mm"}
          </Button>
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
