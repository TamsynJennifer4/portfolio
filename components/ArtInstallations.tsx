import React from "react";
import { motion } from "framer-motion";
import ArtInstallationCard from "./ArtInstallationCard";
import { ArtInstallation } from "../typings";

type Props = {
  artInstallations: ArtInstallation[];
};

function ArtInstallations({ artInstallations }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen my-20 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="top-24 m-10 uppercase tracking-[15px] text-[#fceed9] text-2xl">
        Art Installations & Apartments
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fce9a9]/80">
        {artInstallations?.map((artInstallation) => (
          <ArtInstallationCard
            key={artInstallation?._id}
            artInstallation={artInstallation}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ArtInstallations;
