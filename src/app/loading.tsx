import { FC, ReactElement } from "react";

const Loading: FC = (): ReactElement => {
  return (
    <section className="flex flex-col animate-pulse w-full h-screen justify-center items-center">
      <h1 className="text-4xl text-gray-200 animate-pulse font-bold">
        Loading...
      </h1>
      <div className="animate-pulse w-[200px] h-[200px] rounded-full border-2 bg-gray-200" />
    </section>
  );
};

export default Loading;
