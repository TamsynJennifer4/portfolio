import { House } from "../typings";

export const fetchHouses = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHouse`);

  const data = await res.json();
  const houses: House[] = data.houses;

  // console.log("fetching", houses);

  return houses;
};
