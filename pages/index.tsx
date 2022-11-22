import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;

    navigator.clipboard.writeText(button.textContent);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
          rel="stylesheet"
        ></link>
        <title>special n</title>
      </Head>
      <div className="h-screen text-white bg-neutral-800 font-patrick">
        <main className="flex flex-col items-center justify-center h-screen text-center">
          <img src="/black_rose.png" className="w-[100px] h-[100px]" />
          <h1 className="font-bold text-9xl">special n</h1>
          <div className="flex gap-2 mt-10">
            <button
              onClick={handleClick}
              className="px-8 py-6 text-4xl transition border border-b-4 border-white rounded-sm hover:bg-white hover:text-black active:opacity-20"
            >
              ñ
            </button>
            <button
              onClick={handleClick}
              className="px-8 py-6 text-4xl transition border border-b-4 border-white rounded-sm hover:bg-white hover:text-black active:opacity-20"
            >
              Ñ
            </button>
          </div>
          <footer className="mt-10">
            Made by{" "}
            <a
              className="hover:text-neutral-400"
              href="https://github.com/Fizzify"
              target="_blank"
            >
              Fizzify
            </a>{" "}
            🖤
          </footer>
        </main>
      </div>
    </>
  );
};

export default Home;
