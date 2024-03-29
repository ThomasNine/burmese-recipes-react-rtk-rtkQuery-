import React from "react";
import { useGetRecipesByIdQuery } from "../store/services/endpoints/recepies.endpoints";
import { Link, useParams } from "react-router-dom";
import { useGetUserTypesQuery } from "../store/services/endpoints/user_types.endpoints";
import { Button } from "../components/ui/button";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { recipes, user_types } from "../db/mock.json";
const DetailPage = () => {
  const { id } = useParams();
  const lang = useSelector((state) => state.language.lang);
  const data = recipes.filter((i) => i.id === id);
  const userTypeData = user_types;

  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const user = userTypeData.filter((i) => i.UserCode === data[0].UserType);

  return (
    <motion.div initial="initial" animate="animate" variants={fade}>
      <div className="flex justify-start sm:justify-center items-center min-h-[93vh] ">
        <div className="flex flex-col bg-gray-100 space-y-3 w-full md:w-[600px] lg:w-[1000px] min-h-[600px] border-2 shadow-lg rounded-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:mt-10">
            <img
              src={`/img/${data[0].Name}.jpg`}
              className=" w-full lg:w-[300px] h-80 object-cover rounded-lg shadow-lg ms-0 lg:ms-10"
              alt={data[0].Name}
            />
            <div className=" space-y-6 px-5 md:px-10 mt-10 grow">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-3">
                <h4 className=" text-xl font-semibold">{data[0].Name}</h4>
                <h4 className=" bg-red-200 px-2 rounded-full ">
                  {user[0].UserMMType}
                </h4>
              </div>
              <div className=" space-y-3">
                <h4 className=" text-xl font-medium">
                  {lang === "eng" ? "Ingredients" : "ပါဝင်ပစ္စည်းများ"}
                </h4>
                <h4 className=" text-gray-700 leading-relaxed">
                  {data[0].Ingredients}
                </h4>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-10 md:pt-5 space-y-10 pb-10">
            <div className=" space-y-3">
              <h4 className=" text-xl font-medium">
                {lang === "eng" ? "How to Cook?" : "ချက်ပြုတ်နည်း"}
              </h4>
              <h4 className=" text-gray-700 leading-relaxed">
                {data[0].CookingInstructions}
              </h4>
            </div>
            <div className="flex justify-center">
              <Link to={-1}>
                <Button className=" w-60 flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>
                  {lang === "eng" ? <span>Back</span> : <span>နောက်သို့</span>}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailPage;
