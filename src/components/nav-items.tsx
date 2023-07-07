import * as React from "react";
import { ContactDialog } from "./contact-dialog";

import { MainNavItem } from "types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function NavItems({ items }: MainNavProps) {
  return (
    <>
      {items?.map((item, index) =>
        !item.hasCustomComponent ? (
          <a
            key={index}
            href={item.href}
            className={
              "flex items-center text-lg font-medium transition-colors hover:text-foreground sm:text-sm text-foreground/80"
            }
          >
            {item.title}
          </a>
        ) : (
          <React.Fragment key={index}>
            <ContactDialog item={item} />
          </React.Fragment>
        )
      )}
    </>
  );
}
