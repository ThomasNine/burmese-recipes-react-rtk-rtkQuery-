import React, { useState } from "react";
import { useGetRecipesQuery } from "../store/services/endpoints/recepies.endpoints";
import Card from "../components/Card";
import { SkeletonCard } from "../components/SkeletonCard";
import PaginationComponent from "../components/PaginationComponent";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { recipes } from "../db/mock.json";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };
  const { pathname } = useLocation();
  const data = recipes;
  const itemsPerPage = 15;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

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

export default HomePage;
