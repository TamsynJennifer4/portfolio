import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "../components/Hero";
import About from "../components/About";
import Houses from "../components/Houses";
import ArtInstallations from "../components/ArtInstallations";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

import {
  PageInfo,
  About as AboutType,
  Category,
  House,
  ArtInstallation,
  Social,
} from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchAbout } from "../utils/fetchAbout";
import { fetchHouses } from "../utils/fetchHouses";
import { fetchArtInstallations } from "../utils/fetchArtInstallations";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  categories: Category[];
  about: AboutType;
  houses: House[];
  artInstallations: ArtInstallation[];
  socials: Social[];
};

// colors
// #f74796
// #44ba9f
// #472089
// #fc9f67
// #5f66ed

const Home = ({
  pageInfo,
  categories,
  about,
  houses,
  artInstallations,
  socials,
}: Props) => {
  console.log("categories", categories);
  return (
    <div className="bg-[#5c8055] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-rounded scrollbar-thumb-[#fce9a9]/80">
      <Head>
        <title>Silvia Kenneth</title>
      </Head>

      <section id="hero" className="snap-start">
        <Hero about={about} pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About about={about} />
      </section>

      <section id="houses" className="snap-center">
        <Houses houses={houses} />
      </section>

      <section id="artInstallations" className="snap-start">
        <ArtInstallations artInstallations={artInstallations} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Footer socials={socials} />

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div>
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src=""
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const categories: Category[] = await fetchCategories();
  const about: AboutType = await fetchAbout();
  const houses: House[] = await fetchHouses();
  const artInstallations: ArtInstallation[] = await fetchArtInstallations();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      categories,
      about,
      houses,
      artInstallations,
      socials,
    },
    revalidate: 10,
  };
};
