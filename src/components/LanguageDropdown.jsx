import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { useSelector, useDispatch } from "react-redux";
import {
  changeToEngLanguage,
  changeToMMLanguage,
} from "../store/globalState/LanguageSlice";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function LanguageDropdown() {
  const lang = useSelector((state) => state.language.lang);
  const langData = useSelector((state) => state.language.langData);
  const dispatch = useDispatch();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" radius="full" isIconOnly>
          <TooltipProvider>
            <Tooltip>
              <TooltipContent>
                {lang === "eng" ? (
                  <p>Change Language</p>
                ) : (
                  <p>ဘာသာစကားပြောင်းပါ</p>
                )}
              </TooltipContent>
              <TooltipTrigger>
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
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem onClick={() => dispatch(changeToMMLanguage())}>
          {langData.MMLanguage}
        </DropdownItem>
        <DropdownItem onClick={() => dispatch(changeToEngLanguage())}>
          {langData.EngLanguage}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
