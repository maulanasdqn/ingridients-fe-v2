"use client";

import { FC, ReactElement } from "react";

const ErrorBoundary: FC = (): ReactElement => {
  return (
    <section className="flex animate-pulse w-full h-screen justify-center items-center">
      <h1 className="text-4xl text-red-800 font-bold">Error was Happen</h1>
    </section>
  );
};

export default ErrorBoundary;
