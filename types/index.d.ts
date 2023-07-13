import { type Icon as LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export type NavConfig = MainNavItem[];

export type NavItem = {
  title: string;
  href: string;
  hasCustomComponent: Boolean;
};

export type MainNavItem = NavItem;

export type SocialLinks = SocialLink[];

export type SocialLink = {
  title: string;
  href: string;
  icon: Icon;
};

export type Project = {
  title: string;
  technologies: string[];
  description: string;
  href: string | null;
};

export type Projects = Project[];

export type HeaderButton = {
  title: string;
  href: string;
};

export type HeaderConfig = {
  title: string;
  description: string;
  button: HeaderButton;
  logo: string;
};

export type FooterConfig = {
  name: string;
  separator: string;
  date: string;
};

export type ProjectsSectionConfig = {
  title: string;
  paragraph: string;
};
