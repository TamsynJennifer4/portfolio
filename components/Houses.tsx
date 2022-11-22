import React from "react";
import { motion } from "framer-motion";
import HousesCard from "./HousesCard";
import { House } from "../typings";

type Props = {
  houses: House[];
};

function Houses({ houses }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="top-24 m-10 uppercase tracking-[20px] text-[#fceed9] text-2xl">
        Houses & Apartments
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fce9a9]/80">
        {houses?.map((house) => (
          <HousesCard key={house._id} house={house} />
        ))}
      </div>
    </motion.div>
  );
}

export default Houses;
