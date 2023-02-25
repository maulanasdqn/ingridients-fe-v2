import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const url = "https://randomuser.me/api/";

type resUser = {
  results: Array<{
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
  }>;
};

const fetchUser = async (): Promise<resUser> => {
  const res = await fetch(url, { cache: "no-store", next: { revalidate: 5 } });
  const resData = await res.json();
  return await resData;
};

const Home = async () => {
  const user = await fetchUser();
  return (
    <section className="flex flex-col gap-y-4 w-full h-screen justify-center items-center">
      {user.results.map((item, index) => (
        <Fragment key={index}>
          <h1 className="text-4xl text-red-400 font-bold">
            {item.name.first + " " + item.name.last}
          </h1>
          <Image
            className="rounded-full border-2"
            src={item.picture.large}
            width={200}
            height={200}
            alt={item.name.first}
          />
        </Fragment>
      ))}
    </section>
  );
};

export default Home;
