import React from "react";

export default function Home() {
  return (
    <main>
      <section className="relative flex justify-center flex-col min-h-screen px-8">
        <h1 className="text-2xl font-bold cursive ">
          Hei! Jeg er Tommer Haugland, en front-end utvikler fra Bergen(ish).
        </h1>
        <span className="font-bold cursive">
          Nerd. Gamer. Foodie og utvikler hos{" "}
          <a href="www.acos.no" className="nav-link">
            ACOS AS
          </a>
        </span>
      </section>
    </main>
  );
}
