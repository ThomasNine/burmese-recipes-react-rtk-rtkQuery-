import React, { useState } from "react";
import { useGetUserTypesQuery } from "../store/services/endpoints/user_types.endpoints";
import { useGetRecipesQuery } from "../store/services/endpoints/recepies.endpoints";
import Card from "../components/Card";
import { SkeletonCard } from "../components/SkeletonCard";
import PaginationComponent from "../components/PaginationComponent";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { recipes, user_types } from "../db/mock.json";

const MeatEaterPage = () => {
  const data = recipes;
  const userTypes = user_types;
  const [currentPage, setCurrentPage] = useState(1);
  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };
  const { pathname } = useLocation();

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
};

export default MeatEaterPage;
