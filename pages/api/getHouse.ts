import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { House } from "../../typings";

const query = groq`
    *[_type == "house"]
`;

type Data = {
  houses: House[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const houses: House[] = await sanityClient.fetch(query);

  res.status(200).json({ houses });
}
