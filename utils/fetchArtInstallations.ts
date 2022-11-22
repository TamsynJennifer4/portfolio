import { ArtInstallation } from "../typings";

export const fetchArtInstallations = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getArtInstallations`
  );

  const data = await res.json();
  const artInstallations: ArtInstallation[] = data.artInstallations;

  // console.log("fetching", artInstallations);

  return artInstallations;
};
