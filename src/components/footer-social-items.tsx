import * as React from "react";

import { SocialLinks } from "types";

interface FooterSocialItemsProps {
  items?: SocialLinks;
  children?: React.ReactNode;
}

export function FooterSocialItems({ items }: FooterSocialItemsProps) {
  return (
    <>
      {items?.map((item, index) => (
        <div
          className="flex flex-row justify-center content-center items-center"
          key={index}
        >
          <a
            className="text-gray-500 hover:text-gray-700footer__social-link hover:text-gray-700 focus:text-gray-700 active:text-gray-700"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
          >
            <item.icon />
          </a>
        </div>
      ))}
    </>
  );
}
