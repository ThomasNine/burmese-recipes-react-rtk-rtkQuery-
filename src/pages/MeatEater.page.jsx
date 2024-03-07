import React, { useState } from "react";
import { useGetUserTypesQuery } from "../store/services/endpoints/user_types.endpoints";
import { useGetRecipesQuery } from "../store/services/endpoints/recepies.endpoints";
import Card from "../components/Card";
import { SkeletonCard } from "../components/SkeletonCard";
import PaginationComponent from "../components/PaginationComponent";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MeatEaterPage = () => {
  const { data: userTypes, isSuccess: isUserTypeSuccess } =
    useGetUserTypesQuery();
  const { data, isLoading, isError, isSuccess } = useGetRecipesQuery();
  const numbers = Array.from({ length: 5 }, (_, index) => index + 1);
  const [currentPage, setCurrentPage] = useState(1);
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
  if (isSuccess && isUserTypeSuccess) {
    const meatEaterData = data?.filter(
      (i) => i.UserType === userTypes[0].UserCode
    );
    const itemsPerPage = 15;
    const totalPages = Math.ceil(meatEaterData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = meatEaterData.slice(startIndex, endIndex);
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={fade}
        key={pathname}
      >
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

export default MeatEaterPage;
