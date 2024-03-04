import React from "react";
import { useGetUserTypesQuery } from "../store/services/endpoints/user_types.endpoints";
import { useGetRecipesQuery } from "../store/services/endpoints/recepies.endpoints";
import { Card } from "../components/ui/card";

const HomePage = () => {
  const {} = useGetUserTypesQuery();
  const { data, isLoading, isError, isSuccess } = useGetRecipesQuery();
  if (isLoading) {
    return "isLoading";
  }
  if (isError) {
    return "isError";
  }
  if (isSuccess) {
    return (
      <div className=" flex justify-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-5 sm:gap-y-7 my-10">
        {data?.map((i) => (
          <div className="" key={i.Guid}>
            <div className=" w-[136px] sm:w-56  shadow-lg rounded-lg overflow-hidden hover:scale-[1.03] hover:shadow-xl hover:shadow-first/20 transition duration-500">
              <img
                src={`/img/${i.Name}.jpg`}
                alt={i.Name}
                className=" w-full h-36 sm:h-64 object-cover rounded-lg"
              />
              <p className=" mt-4 mb-6 mx-4 font-medium truncate text-sm">
                {i.Name}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default HomePage;
