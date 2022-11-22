import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { PageInfo, About } from "../typings";
import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
  about: About;
};

function Hero({ pageInfo, about }: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 text-center">
      <h1 className="text-3xl font-sans font-bold uppercase text-[#fceed9] m-10 mt-20 tracking-[18px]">
        {about.name}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 place-item-center">
        {pageInfo?.categories.map((category) => (
          <Link
            className="hover:border border-[#fce9a9]/50"
            id={category._id}
            href={`#${category?.href}`}>
            <button className="text-[#fceed9] uppercase text-lg tracking-wider font-light mx-2 h-40 hover:underline underline-offset-2 decoration-[#fce9a9]/50">
              {category?.title}
            </button>
            <motion.img
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={urlFor(category.image).url()}
              className=""
            />
          </Link>
        ))}
      </div>
      <h1 className="self-center w-80 pt-20 font-serif italic decoration font-extralight text-2xl text-[#fceed9] tracking-[10px]">
        {pageInfo.inspirationalQuote}
      </h1>
      <div className="bg-[#fce9a9]/50 self-center w-20 h-1 my-20" />
    </div>
  );
}

export default Hero;
