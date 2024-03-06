import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { useNavigate, useLocation } from "react-router-dom";

const PaginationComponent = ({ totalPages, currentPage, setCurrentPage }) => {
  const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const nav = useNavigate();
  const { pathname } = useLocation();
  let url;
  if (pathname.includes("/meat-eater/")) {
    url = "/meat-eater/page/";
  } else if (pathname.includes("/vegan/")) {
    url = "/vegan/page/";
  } else if (pathname.includes("/search/")) {
    url = "/search/page/";
  } else {
    url = "/all-recipes/page/";
  }
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      nav(url + (currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      nav(url + (currentPage + 1));
    }
  };
  const handlePaginateItem = (i) => {
    setCurrentPage(i);
    nav(url + i);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink onClick={handlePrevious} disabled={currentPage === 1}>
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </PaginationLink>
        </PaginationItem>
        {totalPagesArray.map((i) => (
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handlePaginateItem(i)}
              isActive={i === currentPage}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationLink
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
