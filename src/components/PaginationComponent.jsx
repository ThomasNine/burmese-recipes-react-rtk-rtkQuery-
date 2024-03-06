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
          <PaginationPrevious
            onClick={handlePrevious}
            disabled={currentPage === 1}
          />
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
          <PaginationNext
            onClick={handleNext}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
