"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

interface OptimizedAvatarProps {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

export function Avatar({
  src,
  alt,
  fallback,
  className,
}: OptimizedAvatarProps) {
  const [error, setError] = React.useState(false);

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-xl bg-muted",
        className
      )}
    >
      {!error && src ? (
        <Image
          src={src}
          alt={alt}
          width={512}
          height={640}
          className="h-full w-full object-cover object-top"
          onError={() => setError(true)}
          priority={true}
          unoptimized={src.startsWith("http")}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-lg font-semibold">
          {fallback}
        </div>
      )}
    </div>
  );
}
