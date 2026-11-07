import type { ComponentPropsWithoutRef } from "react";
import type { SiteImage } from "@/content/images";

type ResponsiveImageProps = Omit<ComponentPropsWithoutRef<"img">, "src" | "srcSet" | "width" | "height" | "alt"> & {
  image: SiteImage;
  alt: string;
};

/**
 * A plain img with hand made WebP sizes. The static export has no image optimiser,
 * so next/image would add nothing here.
 */
export function ResponsiveImage({ image, alt, ...props }: ResponsiveImageProps) {
  return <img src={image.src} srcSet={image.srcSet} width={image.width} height={image.height} alt={alt} {...props} />;
}
