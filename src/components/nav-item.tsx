import * as React from "react";
import { ContactDialog } from "./contact-dialog";
import { MainNavItem } from "types";

interface MainNavProps {
  item: MainNavItem;
}

export function NavItem({ item }: MainNavProps) {
  return !item.hasCustomComponent ? (
    <a
      href={item.href}
      className={
        "flex items-center text-lg font-medium transition-colors hover:text-foreground sm:text-sm text-foreground/80"
      }
    >
      {item.title}
    </a>
  ) : (
    <React.Fragment>
      <ContactDialog item={item} />
    </React.Fragment>
  );
}
