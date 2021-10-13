import React from "react";

export default function Home() {
  return (
    <main>
      <img
        src="https://source.unsplash.com/random"
        alt="Random images from Unsplashed.com"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center flex-col min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hi! I'm Tommer.
        </h1>
        <span class="text-xl text-green-100 font-bold cursive">
          Techie, Gamingnerd that loves to code
        </span>
      </section>
    </main>
  );
}
