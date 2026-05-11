"use client";

import React from "react";

export function TextColor() {
  return (
    <div>
      <div className=" mb-10 mt-4 md:mt-6">
        <div className="px-2">
          <div className="relative p-8 w-full h-full border border-slate-200 dark:border-slate-800 [mask-image:radial-gradient(200rem_24rem_at_center,white,transparent)] border-none">
            <h1 className="tracking-tighter flex select-none px-3 py-2 flex-col text-left lg:text-left text-6xl font-black leading-[0.85] sm:text-8xl lg:text-[8rem] justify-center items-start">
              

              <span
                data-content="Create."
                className="before:animate-gradient-background-1 relative before:absolute before:bottom-4 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                Create.
                </span>
              </span>
              <span
                data-content="Deliver."
                className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                Deliver.
                </span>
              </span>
              <span
                data-content="Dominate."
                className="before:animate-gradient-background-3 relative before:absolute before:bottom-1 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                Dominate.
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
