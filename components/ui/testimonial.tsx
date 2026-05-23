"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  companyLogo?: string;
  quote: string;
  authorName: string;
  authorPosition: string;
  authorImage?: string;
  highlightedText?: string;
}

export const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  (
    {
      className,
      companyLogo,
      quote,
      authorName,
      authorPosition,
      authorImage,
      highlightedText,
      ...props
    },
    ref
  ) => {
    const formattedQuote = highlightedText
      ? quote.replace(
          highlightedText,
          `<strong class="font-semibold text-white">${highlightedText}</strong>`
        )
      : quote;

    return (
      <div
        ref={ref}
        className={cn(
          "relative glass-panel rounded-lg p-10 md:p-12 border border-zinc-900/60 shadow-xl",
          "transition-all duration-500 hover:border-accent/30 hover:-translate-y-1 hover:shadow-2xl",
          className
        )}
        {...props}
      >
        <div className="flex flex-col items-center text-center">
          {companyLogo && (
            <div className="mb-7 relative h-8 w-32">
              <Image
                src={companyLogo}
                alt="Company logo"
                fill
                className="object-contain"
              />
            </div>
          )}

          <span className="absolute top-4 left-6 text-6xl leading-none text-accent/30 font-serif select-none">
            &ldquo;
          </span>

          <p
            className="max-w-xl text-balance text-center text-lg md:text-xl font-light text-zinc-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: `“${formattedQuote}”` }}
          />

          <div className="mt-7 h-px w-10 bg-accent/40" />

          <h5 className="mt-5 text-sm font-medium tracking-wide text-zinc-100">
            {authorName}
          </h5>
          <h5 className="mt-1 text-[10px] tracking-[0.3em] uppercase font-mono text-zinc-500">
            {authorPosition}
          </h5>

          {authorImage && (
            <div className="mt-5 relative size-12 rounded-full overflow-hidden bg-zinc-900 border border-zinc-800">
              <Image
                src={authorImage}
                alt={authorName}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

Testimonial.displayName = "Testimonial";
