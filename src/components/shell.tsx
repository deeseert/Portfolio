import type { ComponentPropsWithoutRef } from "react";

type ShellProps = ComponentPropsWithoutRef<"div"> & {
  as?: "div" | "article";
  /** Adds the cursor light on the rim. SiteEffects moves it. */
  rim?: boolean;
};

/** The outer tray of the double bezel. Content goes inside a `.core`. */
export function Shell({ as: Tag = "div", rim, className, children, ...props }: ShellProps) {
  return (
    <Tag className={["shell", className].filter(Boolean).join(" ")} data-rim={rim || undefined} {...props}>
      {children}
      {rim && (
        <span className="rim" aria-hidden="true">
          <i />
        </span>
      )}
    </Tag>
  );
}
