import type { ReactNode } from "react";
import { ArrowIcon, DownloadIcon } from "./icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  ghost?: boolean;
  small?: boolean;
  magnetic?: boolean;
  /** Shows the download icon and marks the link as a file download. */
  download?: boolean;
};

export function ButtonLink({ href, children, ghost, small, magnetic, download }: ButtonLinkProps) {
  const className = ["btn", small && "small", ghost && "ghost", download && "down"].filter(Boolean).join(" ");

  return (
    <a className={className} href={href} download={download || undefined} data-magnetic={magnetic || undefined}>
      {children} <span className="ic">{download ? <DownloadIcon /> : <ArrowIcon />}</span>
    </a>
  );
}
