import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const FallbackRoutesPage = () => {
  const lang = useSelector((state) => state.language.lang);
  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <motion.div initial="initial" animate="animate" variants={fade}>
      <div className=" flex items-center justify-center h-[85vh] w-full">
        <div className=" flex flex-col items-center">
          <img
            src="/img/error-404-concept-illustration_114360-1811.avif"
            className=" w-2/3"
            alt=""
          />
          <div className="flex flex-col justify-center items-center space-y-5">
            <h4 className=" text-center text-base sm:text-xl">
              {lang === "eng"
                ? "This page could not be found."
                : "ယခုစာမျက်နှာအား မတွေ့ရှိပါ။"}
            </h4>
            <Link to={"/"}>
              <Button>
                {lang === "eng" ? "Go Back Home" : "မူလစာမျက်နှာ"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FallbackRoutesPage;
