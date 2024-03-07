import React, { useState } from "react";
import { Input } from "../components/ui/input";
import Card from "../components/Card";
import { SkeletonCard } from "../components/SkeletonCard";

import { useGetRecipesQuery } from "../store/services/endpoints/recepies.endpoints";
import PaginationComponent from "../components/PaginationComponent";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SearchPage = () => {
  const { data, isLoading, isError, isSuccess } = useGetRecipesQuery();
  const [searchWord, setSearchWords] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const numbers = Array.from({ length: 5 }, (_, index) => index + 1);
  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };
  const { pathname } = useLocation();
  if (isLoading) {
    return (
      <div className=" flex justify-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-5 sm:gap-y-7 my-10">
        {numbers.map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-red-500 w-full h-screen flex items-center justify-center">
        <p>Error occurred while fetching data.</p>
      </div>
    );
  }
  if (isSuccess) {
    const handleSearch = (e) => {
      setSearchWords(e.target.value);
    };
    let searchedData = data.filter((i) => i.Name.includes(searchWord));

    const itemsPerPage = 15;
    const totalPages = Math.ceil(searchedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = searchedData.slice(startIndex, endIndex);

    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={fade}
        key={pathname}
      >
        <div className="flex w-full max-w-60 sm:max-w-sm items-center mx-auto mt-10">
          <Input
            type="search"
            placeholder="Search"
            autoFocus
            onChange={handleSearch}
          />
        </div>
        <div className=" flex justify-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-5 sm:gap-y-7 pt-10 pb-5 min-h-[86vh]">
          {currentData?.map((i) => (
            <div key={i.id}>
              <Card i={i} />
            </div>
          ))}
        </div>
        <div className="mb-7">
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </motion.div>
    );
  }
};

export default SearchPage;
