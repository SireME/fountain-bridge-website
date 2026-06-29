"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { site } from "@/data/site";

type LoadingImageProps = ImageProps & {
  showLogoLoader?: boolean;
};

export function LoadingImage({
  alt,
  className,
  showLogoLoader = true,
  sizes = "100vw",
  ...props
}: LoadingImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {showLogoLoader && isLoading ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 grid place-items-center overflow-hidden bg-gradient-to-br from-teal-900/12 via-white/80 to-gold-100/70"
        >
          <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.72),rgba(255,255,255,0)_58%)]" />
          <div className="relative h-16 w-16 rounded-full bg-white/90 p-2 shadow-soft ring-1 ring-teal-900/10 sm:h-20 sm:w-20">
            <Image src={site.logo} alt="" fill sizes="80px" className="object-contain p-2" />
          </div>
        </div>
      ) : null}
      <Image
        {...props}
        alt={alt}
        sizes={sizes}
        className={`${className ?? ""} transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
