import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Footer({ socials }: Props) {
  return (
    <footer className="border border-amber-50 bottom-0 p-20 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row w-100 h-100 md-100 items-center mx-20 border border-amber-50">
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#fee8b8"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"></motion.div>
      </Link>
    </footer>
  );
}

export default Footer;

// #221714
// #542e1e
// #d29f85
// #fedeb8
// #ef333b
// #9a030f
// #c8a74e
// #695222

// #f24822
