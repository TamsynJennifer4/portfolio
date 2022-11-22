import React from "react";
import { motion } from "framer-motion";
import { ArtInstallation } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  artInstallation: ArtInstallation;
};

export default function ArtInstallationCard({ artInstallation }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] xl:w-[600px] xl:w-[900px] snap-center bg-[#523c3c] border border-[#fceed9] p-10 hover:opacity-40 opacity-100">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-50 h-50 xl:w-[400px] xl:h-[400px]"
        src={urlFor(artInstallation?.image).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-[#fceed9]">
          {artInstallation?.title}
        </h4>
        <p className="font-bold text-2xl mt-1 text-[#fceed9]">
          {artInstallation?.summary}
        </p>
      </div>
    </article>
  );
}
