import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { ArtInstallation } from "../../typings";

const query = groq`
    *[_type == "artInstallation"]
`;

type Data = {
  artInstallations: ArtInstallation[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const artInstallations: ArtInstallation[] = await sanityClient.fetch(query);

  res.status(200).json({ artInstallations });
}
