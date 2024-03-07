import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";
import { useSelector } from "react-redux";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lang = useSelector((state) => state.language.lang);
  const { pathname } = useLocation();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} isBordered>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link to={"/all-recipes/page/1"}>
            <p className=" font-logo text-xl text-first">Burmese Recipes</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            to={"/meat-eater/page/1"}
            className={pathname.includes("/meat-eater/") && "text-first"}
          >
            <p className=" font-medium hover:text-first">
              {lang === "eng" ? "Meat" : "အသားဟင်း"}
            </p>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/vegan/page/1"}
            className={pathname.includes("/vegan/") && "text-first"}
          >
            <p className=" font-medium hover:text-first">
              {lang === "eng" ? "Vegan" : "သက်သက်လွတ်"}
            </p>
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex gap-1" justify="end">
        <NavbarItem>
          <NavLink to={"/search/page/1"}>
            <Tooltip content={lang === "eng" ? "Search" : "ရှာဖွေပါ"}>
              <Button isIconOnly size="sm" color="default" variant="bordered">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </Button>
            </Tooltip>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <LanguageDropdown />
        </NavbarItem>
      </NavbarContent>
      {/* for sm nav  */}
      <NavbarMenu>
        <NavbarItem>
          <NavLink
            to={"/meat-eater/page/1"}
            className={pathname.includes("/meat-eater/") && "text-first"}
          >
            <p className=" font-medium hover:text-first">
              {lang === "eng" ? "Meat" : "အသားဟင်း"}
            </p>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/vegan/page/1"}
            className={pathname.includes("/vegan/") && "text-first"}
          >
            <p className=" font-medium hover:text-first">
              {lang === "eng" ? "Vegan" : "သက်သက်လွတ်"}
            </p>
          </NavLink>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
